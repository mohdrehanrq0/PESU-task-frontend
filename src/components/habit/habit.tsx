import { useState } from 'react';

import { Dialog, DialogContent, DialogTrigger } from '../../components/ui/dialog';
import { useGetAllUserHabit } from '../apiService/query/habitQuery';
import DashboardLayout from '../layout/layout';
import { Button } from '../ui/button';
import CreateHabitModal from './createHabitModal';
import DeleteHabitModal from './deleteHabitModal';
import EditHabit, { IHabitData } from './editHabit';

const Habit = () => {
  const [openAddTask, setOpenAddTask] = useState(false);
  const [editHabitId, setEditHabitId] = useState<string | null>(null);
  const [deleteHabitId, setDeleteHabitId] = useState<string | null>(null);
  const { data: habitData, error } = useGetAllUserHabit();

  return (
    <DashboardLayout>
      <div className="overflow-hidden ">
        <div className="flex justify-end mb-4">
          <Dialog open={openAddTask} onOpenChange={setOpenAddTask}>
            <DialogTrigger>
              <Button variant={"outline"}>Add Task</Button>
            </DialogTrigger>
            <DialogContent>
              <CreateHabitModal setOpen={setOpenAddTask} />
            </DialogContent>
          </Dialog>
        </div>
        <table className="min-w-full divide-y divide-gray-200 table-fixed ">
          <thead className="bg-bg ">
            <tr>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-text-200 uppercase "
              >
                Task
              </th>

              <th scope="col" className="p-4">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-bg-300 divide-y divide-gray-200  ">
            {/* @ts-expect-error error expected */}
            {error?.status === 404 ? (
              <tr className="hover:bg-bg-300 ">
                <td
                  colSpan={2}
                  className="py-4 px-6 text-sm font-medium text-text whitespace-nowrap dark:text-white"
                >
                  Not task added till yet
                </td>
              </tr>
            ) : (
              habitData?.data.habits.map((e: IHabitData, i: number) => (
                <tr className="hover:bg-bg-300 " key={i}>
                  <td className="py-4 px-6 text-sm font-medium text-text whitespace-nowrap ">
                    {e.title}
                  </td>

                  <td className="py-4 px-6 text-sm font-medium justify-end whitespace-nowrap flex gap-4">
                    <Dialog
                      open={editHabitId === e._id}
                      onOpenChange={() => setEditHabitId(e._id)}
                    >
                      <DialogTrigger>
                        <div className="text-blue-600 cursor-pointer  hover:underline">
                          Edit
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <EditHabit
                          setOpen={() => setEditHabitId(null)}
                          open={editHabitId === e._id}
                          habitData={e}
                        />
                      </DialogContent>
                    </Dialog>
                    <Dialog
                      open={deleteHabitId === e._id}
                      onOpenChange={() => setDeleteHabitId(e._id)}
                    >
                      <DialogTrigger>
                        <a href="#" className="text-blue-600  hover:underline">
                          Delete
                        </a>
                      </DialogTrigger>
                      <DialogContent>
                        <DeleteHabitModal
                          habitId={e._id}
                          onClose={() => setDeleteHabitId(null)}
                        />
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Habit;
