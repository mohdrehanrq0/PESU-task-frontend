import React from 'react';

import { useDeleteHabit } from '../apiService/query/habitQuery';
import { Button } from '../ui/button';
import { DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';

const DeleteHabitModal = ({
  habitId,
  onClose,
}: {
  habitId: string;
  onClose: () => void;
}) => {
  const { mutateAsync: deleteApi, isPending } = useDeleteHabit(habitId);
  const handleConfirmDelete = async () => {
    await deleteApi();
    onClose();
  };

  return (
    <DialogHeader>
      <DialogTitle>Edit Habit</DialogTitle>
      <DialogDescription>
        <div className="mt-6">
          <div>Are you confirm you want to delete this habit</div>
          <DialogFooter className="flex !justify-between items-center mt-6">
            <Button type="button" onClick={() => onClose()}>
              Cancel
            </Button>
            <Button onClick={() => handleConfirmDelete()} disabled={isPending}>
              {}
              <div className="flex items-center gap-2 relative">Save</div>
            </Button>
          </DialogFooter>
        </div>
      </DialogDescription>
    </DialogHeader>
  );
};

export default DeleteHabitModal;
