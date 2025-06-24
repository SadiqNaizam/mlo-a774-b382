import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, Activity, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon: Icon, className }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const StatsCardGrid: React.FC = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      description: '+20.1% from last month',
      icon: DollarSign
    },
    {
      title: 'New Leads',
      value: '+2,350',
      description: '+180.1% from last month',
      icon: Users
    },
    {
      title: 'Active Deals',
      value: '142',
      description: '+19% from last month',
      icon: Activity
    },
    {
        title: 'Conversion Rate',
        value: '12.5%',
        description: '+2.1% from last month',
        icon: BarChart
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default StatsCardGrid;
