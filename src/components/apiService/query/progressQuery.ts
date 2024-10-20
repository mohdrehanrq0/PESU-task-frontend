import { useQuery } from '@tanstack/react-query';

import { getUserProgress } from '../api/progressApi';

export const useGetUserProgress = () => {
  return useQuery({
    queryKey: ["getUserProgress"],
    queryFn: getUserProgress,
  });
};
