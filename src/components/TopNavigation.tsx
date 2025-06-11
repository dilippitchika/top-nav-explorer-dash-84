
import { Search, Bell, Settings, User, Grid3x3, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TopNavigation = () => {
  return (
    <div className="border-b bg-white">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Grid3x3 className="h-6 w-6 text-foreground" />
            <span className="text-lg font-semibold">Business overview [Dilip]</span>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              className="pl-10 w-64" 
              placeholder="Search..." 
            />
          </div>
          
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
