import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Users,
  FileText,
  Receipt,
  ShoppingCart,
  Mail,
  Archive,
  Calendar,
  Settings,
  HelpCircle,
} from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', icon: LayoutGrid, href: '#', active: true },
  { name: 'Leads', icon: Users, href: '#' },
  { name: 'Customers', icon: Users, href: '#' },
  { name: 'Proposals', icon: FileText, href: '#' },
  { name: 'Invoices', icon: Receipt, href: '#' },
  { name: 'Items', icon: ShoppingCart, href: '#' },
  { name: 'Mail', icon: Mail, href: '#' },
  { name: 'Shoebox', icon: Archive, href: '#' },
  { name: 'Calendar', icon: Calendar, href: '#' },
];

const secondaryNavItems: NavItem[] = [
  { name: 'Help', icon: HelpCircle, href: '#' },
  { name: 'Settings', icon: Settings, href: '#' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex h-full w-64 flex-col border-r bg-card">
      <div className="flex h-16 shrink-0 items-center border-b px-4">
        <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                <span className="text-sm font-bold text-background">bo</span>
            </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-y-4 overflow-y-auto p-4">
        <nav className="flex-1 space-y-1">
          {mainNavItems.map((item) => (
            <Button
              key={item.name}
              variant={item.active ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start',
                item.active 
                  ? 'font-semibold text-primary' 
                  : 'text-muted-foreground'
              )}
              asChild
            >
              <a href={item.href}>
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </a>
            </Button>
          ))}
        </nav>
        <nav className="mt-auto space-y-1">
            {secondaryNavItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <a href={item.href}>
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                  </a>
                </Button>
            ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
