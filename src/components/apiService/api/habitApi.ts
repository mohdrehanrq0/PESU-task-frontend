import { AuthUserHttpClient } from '../../../lib/httpClient';

const PATH = {
  habitRoute: "/habits",
};

export interface IHabitCreate {
  title: string;
  category: "health" | "work" | "personal_development" | "other" | null;
  frequency: "daily" | "weekly" | null;
  reminderTime: string | null;
}

export interface IHabitUpdate {
  title?: string;
  category?: "health" | "work" | "personal_development" | "other" | null;
  frequency?: "daily" | "weekly" | null;
  reminderTime?: string | null;
}

export const getAllUserHabit = async () => {
  return await AuthUserHttpClient.get(`${PATH.habitRoute}`);
};

export const getLastSevenDaysCompletionRateForAllHabits = async () => {
  return await AuthUserHttpClient.get(`${PATH.habitRoute}/graphData`);
};

export const completeHabit = async (habitId: string) => {
  return await AuthUserHttpClient.get(`${PATH.habitRoute}/complete/${habitId}`);
};

export const createHabit = async (payload: IHabitCreate) => {
  return await AuthUserHttpClient.post(`${PATH.habitRoute}`, payload);
};

export const updateHabit = async (habitId: string, payload: IHabitUpdate) => {
  return await AuthUserHttpClient.put(`${PATH.habitRoute}/${habitId}`, payload);
};

export const deleteHabit = async (habitId: string) => {
  return await AuthUserHttpClient.delete(`${PATH.habitRoute}/${habitId}`);
};
