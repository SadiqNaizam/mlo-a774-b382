import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';

const data = [
  { name: 'March', closedWon: 65, closedLost: 68 },
  { name: 'April', closedWon: 25, closedLost: 45 },
  { name: 'May', closedWon: 64, closedLost: 98 },
  { name: 'June', closedWon: 75, closedLost: 5 },
  { name: 'July', closedWon: 90, closedLost: 42 },
  { name: 'August', closedWon: 30, closedLost: 95 },
];

const LineChart: React.FC = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
                <CardTitle>Leads tracking</CardTitle>
                <div className="flex items-baseline gap-4 pt-2">
                    <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold">680</p>
                        <p className="text-sm text-muted-foreground">total closed</p>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold">70</p>
                        <p className="text-sm text-muted-foreground">total lost</p>
                    </div>
                </div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 font-normal">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>Last 6 months</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>Last 3 months</DropdownMenuItem>
                    <DropdownMenuItem>Last 6 months</DropdownMenuItem>
                    <DropdownMenuItem>Last 12 months</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38B2AC" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#38B2AC" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius)' }} />
              <Legend verticalAlign="bottom" align="left" iconType="square" iconSize={8} wrapperStyle={{paddingTop: '20px'}} formatter={(value) => <span className="text-muted-foregroundcapitalize">{value.replace('closed', 'Closed ')}</span>} />
              <Area type="monotone" dataKey="closedWon" stroke="#38B2AC" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" />
              <Area type="monotone" dataKey="closedLost" stroke="#DC2626" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChart;
