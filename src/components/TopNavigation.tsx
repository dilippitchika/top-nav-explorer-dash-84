

import { Filter, Edit, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopNavigation = () => {
  return (
    <div className="bg-slate-800 text-white">
      {/* Top bar with main navigation */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-slate-700">
        {/* Left section with logo and tabs */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <LayoutGrid className="h-6 w-6" />
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-white hover:text-slate-300">
              <span>📝</span>
              <span>Note</span>
            </button>
            
            <button className="flex items-center space-x-2 text-white hover:text-slate-300">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            
            <button className="text-slate-400 hover:text-slate-300">
              Parameter
            </button>
            
            <button className="text-white hover:text-slate-300">
              Tab
            </button>
            
            <button className="relative text-white hover:text-slate-300 px-3 py-1 rounded-md overflow-hidden">
              <span className="relative z-10">Re-organise</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-400/30 to-blue-500/20 animate-pulse"></div>
              <div className="absolute inset-0 bg-blue-500/10 animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-bounce"></div>
            </button>
          </div>
        </div>

        {/* Right section with action buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-slate-700">
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Save
          </Button>
        </div>
      </div>
      
      {/* Bottom section with title and show panel */}
      <div className="flex items-center justify-between px-6 py-3 bg-white text-slate-900">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium">Business overview [Dilip]</span>
          <Edit className="h-4 w-4 text-slate-500" />
        </div>
        
        <button className="flex items-center space-x-2 text-slate-600 hover:text-slate-800">
          <span>Show panel</span>
          <LayoutGrid className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;

