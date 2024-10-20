import { toast } from 'sonner';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
    completeHabit, createHabit, deleteHabit, getAllUserHabit,
    getLastSevenDaysCompletionRateForAllHabits, IHabitCreate, IHabitUpdate, updateHabit
} from '../api/habitApi';

export const useGetAllUserHabit = () => {
  return useQuery({
    queryKey: ["getAllUserHabit"],
    queryFn: getAllUserHabit,
  });
};

export const useLastSevenDaysCompletionRateForAllHabits = () => {
  return useQuery({
    queryKey: ["getLastSevenDaysCompletionRateForAllHabits"],
    queryFn: getLastSevenDaysCompletionRateForAllHabits,
  });
};

export const useCompleteHabit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["completeHabit"],
    mutationFn: async (habitId: string) => {
      await completeHabit(habitId);
      await queryClient.invalidateQueries({ queryKey: ["getAllUserHabit"] });
    },
    onError(error: { response: { data: { message: string } } }) {
      //   console.log(error);
      if (error?.response?.data) toast.error(error.response.data.message);
    },
  });
};

export const useUpdateHabit = (habitId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateHabit"],
    mutationFn: async (payload: IHabitUpdate) => {
      await updateHabit(habitId, payload);
      await queryClient.invalidateQueries({ queryKey: ["getAllUserHabit"] });
    },
    onSuccess: () => toast.success("Task Updated successfully!"),
    onError(error: { response: { data: { message: string } } }) {
      //   console.log(error);
      if (error?.response?.data) toast.error(error.response.data.message);
    },
  });
};

export const useCreateHabit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createHabit"],
    mutationFn: async (payload: IHabitCreate) => {
      await createHabit(payload);
      await queryClient.invalidateQueries({ queryKey: ["getAllUserHabit"] });
    },
    onSuccess: () => toast.success("Task added successfully!"),
    onError(error: { response: { data: { message: string } } }) {
      //   console.log(error);
      if (error?.response?.data) toast.error(error.response.data.message);
    },
  });
};

export const useDeleteHabit = (habitId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteHabit", habitId],
    mutationFn: async () => {
      await deleteHabit(habitId);
      await queryClient.invalidateQueries({ queryKey: ["getAllUserHabit"] });
    },
    onSuccess: () => toast.success("Task deleted successfully!"),
    onError(error: { response: { data: { message: string } } }) {
      //   console.log(error);
      if (error?.response?.data) toast.error(error.response.data.message);
    },
  });
};
