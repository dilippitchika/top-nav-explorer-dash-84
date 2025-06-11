import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReorganiseLoaderProps {
  onComplete: () => void;
}

const steps = [
  "Understanding the current layout of the Liveboard and it's answers",
  "Pulling all the datasource information to understand the relationships between columns",
  "Re building the new layout with the necessary context",
  "Applying final touchups"
];

const ReorganiseLoader = ({ onComplete }: ReorganiseLoaderProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        if (currentStep === steps.length - 1) {
          setIsComplete(true);
        } else {
          setCurrentStep(currentStep + 1);
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleShowNewLiveboard = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-background border rounded-lg p-8 max-w-md w-full mx-4 text-center">
        {!isComplete ? (
          <>
            <div className="flex justify-center mb-6">
              <Loader className="h-8 w-8 animate-spin text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-4">Re-organising your Liveboard</h3>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`text-sm p-3 rounded-md transition-all ${
                    index < currentStep
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : index === currentStep
                      ? 'bg-purple-50 text-purple-700 border border-purple-200'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <div className="text-green-600 text-2xl">🎉</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">Congratulations!</h3>
            <p className="text-muted-foreground mb-6">
              Your Liveboard has been successfully reorganized with improved layout and data relationships.
            </p>
            <Button 
              onClick={handleShowNewLiveboard}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Show me new Liveboard
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ReorganiseLoader;
