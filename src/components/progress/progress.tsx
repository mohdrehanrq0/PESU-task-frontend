import { Flame } from 'lucide-react';
import { useContext } from 'react';

import { useGetUserProgress } from '../apiService/query/progressQuery';
import { AuthContext } from '../context/AuthContext';
import { IHabitData } from '../habit/editHabit';
import DashboardLayout from '../layout/layout';

const Progress = () => {
  const { data: progressData, error } = useGetUserProgress();
  const { session } = useContext(AuthContext);

  return (
    <DashboardLayout>
      <div className="flex gap-8 items-start">
        <div className="w-5/6 rounded overflow-hidden">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-200 table-fixed ">
              <thead className="bg-bg ">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-text uppercase dark:text-gray-400"
                  >
                    Task
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-text uppercase dark:text-gray-400"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-text uppercase dark:text-gray-400"
                  >
                    Streak
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-text uppercase dark:text-gray-400"
                  >
                    Best Streak
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-text uppercase dark:text-gray-400"
                  >
                    Completion Rate
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-text uppercase dark:text-gray-400"
                  >
                    Last update
                  </th>
                </tr>
              </thead>
              <tbody className="bg-bg-300 divide-y divide-gray-200  dark:divide-gray-700">
                {/* @ts-expect-error error expected */}
                {error?.status === 404 ? (
                  <tr className="hover:bg-bg-300 ">
                    <td
                      colSpan={6}
                      className="py-4 px-6 text-sm font-medium text-text whitespace-nowrap dark:text-white"
                    >
                      Not progress till yet
                    </td>
                  </tr>
                ) : (
                  progressData?.data.habits.map((e: any, i: number) => (
                    <tr className="hover:bg-bg-300 " key={i}>
                      <td className="py-4 px-6 text-sm font-medium text-text whitespace-nowrap ">
                        {e.habitTitle}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-text whitespace-nowrap ">
                        {e.habitCategory}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-text whitespace-nowrap ">
                        {e.streak}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-text whitespace-nowrap ">
                        {e.bestStreak}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-text whitespace-nowrap ">
                        {e.completionRate}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-text whitespace-nowrap ">
                        {e.lastUpdated}
                      </td>
                    </tr>
                  ))
                )}
                {}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-1/6 flex flex-col gap-4">
          <div className="flex items-center p-5 rounded bg-bg-300 gap-4">
            Streak:{" "}
            <span className="flex gap-2 text-2xl items-center font-bold">
              1<Flame />
            </span>
          </div>
          <div className="flex items-center p-5 rounded bg-bg-300 gap-4">
            Your Points:{" "}
            <span className="flex gap-2 text-2xl items-center font-bold">
              {session.reward_points ? session.reward_points : 0}
            </span>
          </div>
          <div className="flex items-center p-5 rounded bg-bg-300 gap-4">
            Your Badge:{" "}
            <span className="flex gap-2 text-xl items-center font-bold">
              {session.reward_badge ? (
                session.reward_badge
              ) : (
                <span className="text-xs text-gray-300">no badge</span>
              )}
            </span>
          </div>
          <div className="flex items-center p-5 rounded text-xs bg-bg-300 gap-4">
            Overall habit completion rate:{" "}
            <span className="flex gap-2 text-2xl items-center font-bold">
              {progressData?.data.overallCompletionRate ?? 0}
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Progress;
