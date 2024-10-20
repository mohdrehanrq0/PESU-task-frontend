import { toast } from 'sonner';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
    getUserDetails, ILogin, ISignup, loginService, logoutUserService, signupService
} from '../api/userApis';

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: ILogin) => {
      await loginService(data);
      await queryClient.invalidateQueries({ queryKey: ["session"] });
    },
    onSuccess: () => toast.success("Logged in successfully!"),
    onError(error: { response: { data: { message: string } } }) {
      //   console.log(error);
      if (error?.response?.data) toast.error(error.response.data.message);
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: ISignup) => {
      await signupService(data);
      await queryClient.invalidateQueries({ queryKey: ["session"] });
    },
    onSuccess: () => toast.success("User register successfully! Please Login "),
    onError(error: { response: { data: { message: string } } }) {
      //   console.log(error);
      if (error?.response?.data) toast.error(error.response.data.message);
    },
  });
};

export const useLogout = () => {
  return useQuery({
    queryKey: ["logout"],
    queryFn: logoutUserService,
  });
};

export const useSession = () =>
  useQuery({
    queryKey: ["session"],
    queryFn: getUserDetails,
  });
