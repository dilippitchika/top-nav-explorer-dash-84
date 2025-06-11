
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface KPICardProps {
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  changeColor?: 'green' | 'red';
  className?: string;
  height?: string;
}

const KPICard = ({ title, value, subtitle, change, changeColor, className, height }: KPICardProps) => {
  return (
    <Card className={`hover:shadow-md transition-shadow ${className}`} style={height ? { height } : undefined}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
        {change && (
          <p className={`text-sm mt-1 ${changeColor === 'green' ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default KPICard;
