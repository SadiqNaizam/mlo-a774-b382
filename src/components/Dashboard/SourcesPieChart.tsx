import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip as RechartsTooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  deals: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, deals: 120, color: '#F87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 25, deals: 80, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 1000, percentage: 15, deals: 50, color: '#38B2AC' }, // teal-500
  { name: 'Dribbble', value: 1000, percentage: 10, deals: 30, color: '#6EE7B7' }, // emerald-300
];

const SourcesPieChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('leads-converted');

  return (
    <Card className="col-span-3 lg:col-span-1">
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 w-48 mx-auto mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <RechartsTooltip 
                cursor={{ fill: 'transparent' }} 
                contentStyle={{ 
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.5rem',
                 }}
               />
              <Pie data={data} dataKey="percentage" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="space-y-3 mb-6">
          {data.map((source) => (
            <li key={source.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 text-sm">
              <div className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-full mr-3" style={{ backgroundColor: source.color }}></span>
                <span>{source.name}</span>
              </div>
              <span className="font-medium">{`$ ${source.value}`}</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-right text-muted-foreground cursor-default">{`${source.percentage}%`}</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>from leads total</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
        <Tabs defaultValue="leads-converted" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="leads-came" className="text-xs px-1">Leads came</TabsTrigger>
            <TabsTrigger value="leads-converted" className="text-xs px-1">Leads Converted</TabsTrigger>
            <TabsTrigger value="total-deals-size" className="text-xs px-1">Total deals size</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SourcesPieChart;
