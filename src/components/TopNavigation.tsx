
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
