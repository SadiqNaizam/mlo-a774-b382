import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, PlusCircle, Book, UserPlus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-64 right-0 z-10 flex h-16 items-center justify-between border-b bg-background px-8">
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
            <span>New Lead</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>New Customer</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Book className="mr-2 h-4 w-4" />
            <span>New Invoice</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
