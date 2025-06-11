
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface BarChartCardProps {
  title: string;
  data: any[];
  colors: string[];
}

const BarChartCard = ({ title, data, colors }: BarChartCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis hide />
              <YAxis hide />
              <Bar dataKey="mfgr14" fill={colors[0]} />
              <Bar dataKey="mfgr15" fill={colors[1]} />
              <Bar dataKey="mfgr21" fill={colors[2]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 flex items-center space-x-4 text-sm">
          {['mfgr14', 'mfgr15', 'mfgr21'].map((key, index) => (
            <div key={key} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-1" 
                style={{ backgroundColor: colors[index] }}
              />
              <span className="text-muted-foreground">{key}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BarChartCard;
