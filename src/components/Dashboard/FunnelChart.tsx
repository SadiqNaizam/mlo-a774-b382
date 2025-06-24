import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-indigo-900' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const FunnelChart: React.FC = () => {
  const totalCount = funnelData.reduce((sum, stage) => sum + stage.count, 0);

  return (
    <Card className="col-span-3 lg:col-span-2">
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
        <div className="flex items-baseline gap-2 pt-2">
            <p className="text-4xl font-bold">600</p>
            <p className="text-sm text-muted-foreground">active leads</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full flex rounded-full overflow-hidden h-2 mb-6">
          {funnelData.map((stage) => (
            <div key={stage.name} className={cn("h-full", stage.color)} style={{ width: `${(stage.count / totalCount) * 100}%` }} />
          ))}
        </div>
        <ul className="space-y-4">
          {funnelData.map((stage) => (
            <li key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 text-sm">
              <div className="flex items-center">
                <span className={cn("w-2.5 h-2.5 rounded-full mr-3", stage.color)}></span>
                <span>{stage.name}</span>
              </div>
              <span className="text-right text-muted-foreground">{stage.count}</span>
              <span className="text-right text-muted-foreground">{`$ ${stage.value}`}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                        <span className="text-right text-muted-foreground cursor-pointer">{stage.duration}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>average time on this stage</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FunnelChart;
