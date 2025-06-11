import TopNavigation from '@/components/TopNavigation';
import KPICard from '@/components/KPICard';
import LineChartCard from '@/components/LineChartCard';
import DonutChartCard from '@/components/DonutChartCard';
import BarChartCard from '@/components/BarChartCard';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Sample data for charts
const lineData1 = Array.from({ length: 30 }, (_, i) => ({
  value: Math.random() * 50 + 20 + Math.sin(i / 3) * 10
}));

const lineData2 = Array.from({ length: 30 }, (_, i) => ({
  value: Math.random() * 40 + 60 + Math.cos(i / 4) * 15
}));

const revenueData = [
  { name: 'chilton', value: 35, color: '#8B5CF6' },
  { name: 'bluah', value: 30, color: '#F59E0B' },
  { name: 'teal', value: 25, color: '#06B6D4' },
  { name: 'purple', value: 10, color: '#3B82F6' }
];

const pipelineData = [
  { name: 'beige', value: 25, color: '#F59E0B' },
  { name: 'azure', value: 35, color: '#06B6D4' },
  { name: 'antique', value: 20, color: '#10B981' },
  { name: 'aquamarine', value: 20, color: '#3B82F6' }
];

const barData = [
  { name: 'Q1', mfgr14: 60, mfgr15: 40, mfgr21: 20 },
  { name: 'Q2', mfgr14: 45, mfgr15: 35, mfgr21: 25 },
  { name: 'Q3', mfgr14: 30, mfgr15: 30, mfgr21: 15 }
];

const Index = () => {
  const [showGroupedLiveboard, setShowGroupedLiveboard] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNavigation onShowGroupedLiveboard={() => setShowGroupedLiveboard(true)} />
      
      <div className="p-6">
        {showGroupedLiveboard ? (
          <div className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-6 mb-0 items-stretch h-full">
              {/* Pipeline trends */}
              <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-0 h-[340px] flex flex-col">
                <h2 className="text-xl font-semibold mb-2">Pipeline trends</h2>
                <div className="border-b border-gray-200 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-0">
                  <LineChartCard
                    title="Total Pipeline Value"
                    value="US$27.05M"
                    change="↑ 81.02% vs Week of 12/10/1998 (US$14.94M)"
                    changeColor="green"
                    data={lineData1}
                    color="#3B82F6"
                    chartHeight="70px"
                  />
                  <LineChartCard
                    title="CFY"
                    value="US$72.94M"
                    change="↓ 69.35% vs Sept 1998 (US$237.98M)"
                    changeColor="red"
                    data={lineData2}
                    color="#06B6D4"
                    chartHeight="70px"
                  />
                </div>
              </div>
              {/* Key Metrics */}
              <div className="bg-white rounded-lg shadow p-4 flex-1 min-w-0 h-[340px] flex flex-col justify-between">
                <h2 className="text-xl font-semibold mb-2">Key Metrics</h2>
                <div className="border-b border-gray-200 mb-4"></div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 h-full">
                  <KPICard title="Total Pipeline Value" value="US$27.05M" />
                  <KPICard title="Qualified Pipeline" value="US$643.49K" />
                  <KPICard title="Pipeline Value" value="US$72.94M" />
                  <KPICard title="Commit to book ratio" value="19.05" />
                </div>
              </div>
            </div>
            {/* Pipeline breakdown */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2">Pipeline breakdown</h2>
              <div className="border-b border-gray-200 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DonutChartCard title="Revenue breakdown" data={revenueData} />
                <DonutChartCard title="Pipeline distribution" data={pipelineData} />
                <BarChartCard title="Pipeline distribution" data={[{ name: 'Category', mfgr14: 80, mfgr15: 0, mfgr21: 0 }]} colors={['#8B5CF6', '#06B6D4', '#F59E0B']} />
                <BarChartCard title="Pipeline distribution" data={barData} colors={['#F59E0B', '#06B6D4', '#8B5CF6']} />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Left group: Line charts side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LineChartCard
                  title="Total Pipeline Value"
                  value="US$27.05M"
                  change="↑ 9.02% vs Week of 12/10/1998 (US$14.94M)"
                  changeColor="green"
                  data={lineData1}
                  color="#3B82F6"
                  chartHeight="70px"
                />
                
                <LineChartCard
                  title="CFY"
                  value="US$72.94M"
                  change="↓ 69.35% vs Sept 1998 (US$237.98M)"
                  changeColor="red"
                  data={lineData2}
                  color="#06B6D4"
                  chartHeight="70px"
                />
              </div>

              {/* Right group: KPI cards in 2x2 grid */}
              <div className="grid grid-cols-2 gap-4">
                <KPICard
                  title="Total Pipeline Value"
                  value="US$27.05M"
                />
                
                <KPICard
                  title="Qualified Pipeline"
                  value="US$643.49K"
                />
                
                <KPICard
                  title="Pipeline Value"
                  value="US$72.94M"
                />
                
                <KPICard
                  title="Commit to book ratio"
                  value="19.05"
                />
              </div>
            </div>

            {/* Bottom row: Donut and bar charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DonutChartCard
                title="Revenue breakdown"
                data={revenueData}
              />
              
              <DonutChartCard
                title="Pipeline distribution"
                data={pipelineData}
              />
              
              <BarChartCard
                title="Pipeline distribution"
                data={[
                  { name: 'Category', mfgr14: 80, mfgr15: 0, mfgr21: 0 }
                ]}
                colors={['#8B5CF6', '#06B6D4', '#F59E0B']}
              />
              
              <BarChartCard
                title="Pipeline distribution"
                data={barData}
                colors={['#F59E0B', '#06B6D4', '#8B5CF6']}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
