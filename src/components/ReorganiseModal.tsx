
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

interface ReorganiseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReorganiseModal = ({ open, onOpenChange }: ReorganiseModalProps) => {
  const [reorganiseScope, setReorganiseScope] = useState('only-tab');
  const [includeSummary, setIncludeSummary] = useState('yes');

  const handleReorganise = () => {
    console.log('Reorganising with scope:', reorganiseScope, 'Include summary:', includeSummary);
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Re-organise the Liveboard with Spotter
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6">
          <p className="text-sm text-muted-foreground">
            Automatically categorise and re-organise the Liveboard with our newest spotter skill which helps you bring your data story to the forefront
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-3">Reorganise</h4>
              <RadioGroup value={reorganiseScope} onValueChange={setReorganiseScope}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="only-tab" id="only-tab" />
                  <Label htmlFor="only-tab" className="text-sm">Only this tab</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all-tabs" id="all-tabs" />
                  <Label htmlFor="all-tabs" className="text-sm">All tabs</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-3">Include summary</h4>
              <RadioGroup value={includeSummary} onValueChange={setIncludeSummary}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="summary-yes" />
                  <Label htmlFor="summary-yes" className="text-sm">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="summary-no" />
                  <Label htmlFor="summary-no" className="text-sm">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleReorganise} className="bg-purple-600 hover:bg-purple-700">
            Re-organise
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReorganiseModal;
