
import { Filter, Edit, LayoutGrid, Wand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReorganiseModal from './ReorganiseModal';
import ReorganiseLoader from './ReorganiseLoader';
import { useState } from 'react';

const TopNavigation = () => {
  const [isReorganiseModalOpen, setIsReorganiseModalOpen] = useState(false);
  const [isReorganising, setIsReorganising] = useState(false);

  const handleReorganiseClick = () => {
    setIsReorganiseModalOpen(true);
  };

  const handleReorganiseStart = () => {
    setIsReorganiseModalOpen(false);
    setIsReorganising(true);
  };

  const handleReorganiseComplete = () => {
    setIsReorganising(false);
    console.log('Reorganisation complete - showing new Liveboard');
  };

  return (
    <>
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
              
              <button 
                onClick={handleReorganiseClick}
                className="flex items-center space-x-2 text-white hover:text-white/90 px-3 py-1 rounded-md bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all"
              >
                <Wand className="h-4 w-4" />
                <span>Re-organise</span>
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

        <ReorganiseModal 
          open={isReorganiseModalOpen} 
          onOpenChange={setIsReorganiseModalOpen}
          onReorganise={handleReorganiseStart}
        />
      </div>

      {isReorganising && (
        <ReorganiseLoader onComplete={handleReorganiseComplete} />
      )}
    </>
  );
};

export default TopNavigation;
