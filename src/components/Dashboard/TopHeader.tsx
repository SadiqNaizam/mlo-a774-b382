import React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, PlusCircle, Book, UserPlus } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-0 bg-background border-b pl-72 pr-6">
        <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                Create
                <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Lead
                </DropdownMenuItem>
                <DropdownMenuItem>
                <UserPlus className="mr-2 h-4 w-4" />
                New Customer
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Book className="mr-2 h-4 w-4" />
                New Invoice
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </header>
  );
};

export default TopHeader;
