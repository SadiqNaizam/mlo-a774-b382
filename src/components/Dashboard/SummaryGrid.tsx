import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface Reason {
    percentage: number;
    text: string;
}

const reasonsForLoss: Reason[] = [
    { percentage: 40, text: 'The proposal is unclear' },
    { percentage: 20, text: 'However venture pursuit' },
    { percentage: 10, text: 'Other' },
    { percentage: 30, text: 'The proposal is unclear' } // The image shows this text twice
];

const otherData = [
    { value: '900', label: 'total leads count' },
    { value: '12', label: 'days in average to convert lead' },
    { value: '30', label: 'inactive leads', hasTooltip: true },
];

const SummaryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-3">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {reasonsForLoss.map((reason, index) => (
                    <div key={index}>
                        <p className="text-4xl font-bold">{reason.percentage}%</p>
                        <p className="text-sm text-muted-foreground mt-1">{reason.text}</p>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-3 gap-4">
                {otherData.map((data, index) => (
                    <div key={index}>
                        <p className="text-4xl font-bold">{data.value}</p>
                        <div className="flex items-center gap-1.5 mt-1">
                           <p className="text-sm text-muted-foreground">{data.label}</p>
                           {data.hasTooltip && (
                             <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <HelpCircle className="w-4 h-4 text-muted-foreground" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Leads with no activity in 30 days.</p>
                                    </TooltipContent>
                                </Tooltip>
                             </TooltipProvider>
                           )}
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryGrid;
