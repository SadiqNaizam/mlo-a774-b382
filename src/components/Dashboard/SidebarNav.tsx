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
  Menu
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

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col fixed inset-y-0 z-10 bg-card border-r h-full p-4">
      <div className="flex items-center justify-between h-16 mb-4">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="font-bold text-white text-sm">bo</span>
            </div>
        </div>
         <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <nav className="flex-1 space-y-2">
          {mainNavItems.map((item) => (
            <Button
              key={item.name}
              variant={item.active ? 'secondary' : 'ghost'}
              className={cn(
                'w-full justify-start',
                item.active ? 'bg-secondary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
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
        <nav className="mt-auto space-y-2">
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

export default SidebarNav;
