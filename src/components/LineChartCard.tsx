import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';

interface LineChartCardProps {
  title: string;
  value: string;
  change: string;
  changeColor: 'green' | 'red';
  data: any[];
  color: string;
  chartHeight?: string;
}

const LineChartCard = ({ title, value, change, changeColor, data, color, chartHeight }: LineChartCardProps) => {
  const height = chartHeight || '92px';
  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold mb-1">{value}</div>
          <p className={`text-sm mb-4 ${changeColor === 'green' ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </p>
        </div>
        <div style={{ height, minHeight: height }} className="mb-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis hide />
              <YAxis hide />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={color} 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
          Analyse change
        </Button>
      </CardContent>
    </Card>
  );
};

export default LineChartCard;
