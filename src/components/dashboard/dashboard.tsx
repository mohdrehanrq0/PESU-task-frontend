import { Flame } from 'lucide-react';

import { cn } from '../../lib/utils';
import {
    useCompleteHabit, useGetAllUserHabit, useLastSevenDaysCompletionRateForAllHabits
} from '../apiService/query/habitQuery';
import { IHabitData } from '../habit/editHabit';
import DashboardLayout from '../layout/layout';
import HabitProgressChart from './progressChart';

const Dashboard = () => {
  const { data: habitData, error } = useGetAllUserHabit();
  const { data: graphData, error: graphError } =
    useLastSevenDaysCompletionRateForAllHabits();
  const { mutateAsync: completeHabit, isPending } = useCompleteHabit();
  return (
    <DashboardLayout>
      <div className="flex gap-8 items-start">
        <div className="w-2/3 rounded overflow-hidden">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-bg ">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-text-200 uppercase dark:text-gray-400"
                  >
                    Task
                  </th>

                  <th scope="col" className="p-4">
                    <span className="sr-only">Mark has Complete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-bg-300 divide-y divide-gray-200  dark:divide-gray-700">
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
                      <td
                        className={cn(
                          "py-4 px-6 text-sm font-medium text-text whitespace-nowrap dark:text-white",
                          e.completed ? " line-through" : ""
                        )}
                      >
                        {e.title}
                      </td>

                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        {!e.completed ? (
                          !isPending ? (
                            <div
                              className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                              onClick={async () => {
                                await completeHabit(e._id);
                              }}
                            >
                              Mark has Complete
                            </div>
                          ) : (
                            <> </>
                          )
                        ) : (
                          <></>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <div className="flex items-center p-5 rounded bg-bg-300 gap-4">
            Streak:{" "}
            <span className="flex gap-2 text-2xl items-center font-bold">
              1<Flame />
            </span>
          </div>
          <div className="flex flex-col items-center p-5 rounded bg-bg-300 gap-4">
            <div>Check your habit completion progress</div>
            {/* @ts-expect-error error expected */}
            {graphError?.status === 404 ? (
              <div className="h-40 flex justify-center items-center font-xs text-gray-400 font-semibold">
                No progress found for habit
              </div>
            ) : (
              <HabitProgressChart
                label={graphData?.data.labels}
                dataPoint={graphData?.data.completionRates}
              />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
