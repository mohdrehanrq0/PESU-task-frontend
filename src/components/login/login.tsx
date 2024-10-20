import { UserCircle2 } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { cn } from '../../lib/utils';
import { useLogin } from '../apiService/query/userQuery';
import DarkModeToggle from '../common/darkModeToggle';
import GetLogo from '../common/getLogo';
import Label from '../habit/label';
import { Input } from '../ui/input';

export function LoginComponent() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { mutateAsync: loginUser, isPending } = useLogin();

  const handleSubmit = async () => {
    if (loginData.email !== "" && loginData.password !== "" && !isPending) {
      await loginUser(loginData);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };
  return (
    <div>
      <div className=" w-full h-[100vh] flex justify-center items-center ">
        <div className="max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-bg-200 ">
          <div className="flex items-center mb-6 text-2xl font-semibold text-text">
            <GetLogo className="w-8 h-8 mr-2" />
            Habit Tracker
          </div>
          <p className="text-text-200 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Login to your Habit Tracker account
          </p>
          <div className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label value="Email Address" />
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                value={loginData.email}
                onChange={(e) => {
                  setLoginData((pre) => ({
                    ...pre,
                    email: e.target.value,
                  }));
                }}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label value="Password" />
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                value={loginData.password}
                onChange={(e) => {
                  setLoginData((pre) => ({
                    ...pre,
                    password: e.target.value,
                  }));
                }}
              />
            </LabelInputContainer>

            <button
              className="bg-bg-300 disabled:opacity-50 text-text relative  transition delay-300 ease-linear   block  w-full rounded-md h-10 font-medium  "
              type="submit"
              disabled={
                !(loginData.email !== "" && loginData.password !== "") ||
                isPending
              }
              onClick={() => handleSubmit()}
            >
              Login &rarr;
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <Link
                to="/register"
                className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <UserCircle2 className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Create a account
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <DarkModeToggle />
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
