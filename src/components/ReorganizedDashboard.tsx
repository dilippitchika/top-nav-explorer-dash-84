
import KPICard from '@/components/KPICard';
import LineChartCard from '@/components/LineChartCard';
import DonutChartCard from '@/components/DonutChartCard';
import BarChartCard from '@/components/BarChartCard';

// Sample data for charts (same as original)
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

const ReorganizedDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Group 1 and Group 2 side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Group 1: Pipeline trends container */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <LineChartCard
              title="Total Pipeline Value"
              value="US$27.05M"
              change="↑ 9.02% vs Week of 12/10/1998 (US$14.94M)"
              changeColor="green"
              data={lineData1}
              color="#3B82F6"
            />
            
            <LineChartCard
              title="CFY"
              value="US$72.94M"
              change="↓ 69.35% vs Sept 1998 (US$237.98M)"
              changeColor="red"
              data={lineData2}
              color="#06B6D4"
            />
          </div>
        </div>

        {/* Group 2: KPI metrics container - 2x2 grid */}
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

      {/* Group 3: Remaining visualizations in a single row */}
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
    </div>
  );
};

export default ReorganizedDashboard;
