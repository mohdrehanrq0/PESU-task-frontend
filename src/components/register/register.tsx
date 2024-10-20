import { LogInIcon } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { cn } from '../../lib/utils';
import { useSignup } from '../apiService/query/userQuery';
import DarkModeToggle from '../common/darkModeToggle';
import GetLogo from '../common/getLogo';
import Label from '../habit/label';
import { Input } from '../ui/input';

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { mutateAsync: registerUser, isPending } = useSignup();

  const handleSubmit = async () => {
    if (
      registerData.email !== "" &&
      registerData.name !== "" &&
      registerData.confirmPassword !== "" &&
      registerData.password !== "" &&
      registerData.confirmPassword === registerData.password &&
      !isPending
    ) {
      await registerUser({
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
      });
      setTimeout(() => {
        navigate("/login");
      }, 500);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-bg-200 ">
        <div className="flex items-center mb-6 text-2xl font-semibold text-text">
          <GetLogo className="w-8 h-8 mr-2" />
          Habit Tracker
        </div>

        <div className="mt-8">
          <LabelInputContainer className="mb-4">
            <Label value="Name" />
            <Input
              id="name"
              placeholder="Full Name"
              type="text"
              value={registerData.name}
              onChange={(e) => {
                setRegisterData((pre) => ({
                  ...pre,
                  name: e.target.value,
                }));
              }}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label value="Email" />
            <Input
              id="email"
              placeholder="yourmail@email.com"
              type="email"
              value={registerData.email}
              onChange={(e) => {
                setRegisterData((pre) => ({
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
              value={registerData.password}
              onChange={(e) => {
                setRegisterData((pre) => ({
                  ...pre,
                  password: e.target.value,
                }));
              }}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label value="Confirm Password" />
            <Input
              id="confirmPassword"
              placeholder="••••••••"
              type="text"
              value={registerData.confirmPassword}
              onChange={(e) => {
                setRegisterData((pre) => ({
                  ...pre,
                  confirmPassword: e.target.value,
                }));
              }}
            />
          </LabelInputContainer>

          <button
            className="bg-bg-300 disabled:opacity-50 text-text relative  transition delay-300 ease-linear   block  w-full rounded-md h-10 font-medium  "
            disabled={
              !(
                registerData.email !== "" &&
                registerData.name !== "" &&
                registerData.confirmPassword !== "" &&
                registerData.password !== "" &&
                registerData.confirmPassword === registerData.password
              ) || isPending
            }
            onClick={() => handleSubmit()}
          >
            SignUp &rarr;
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <Link
              to="/login"
              className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-text rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            >
              <LogInIcon className="h-4 w-4 text-text dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export const LabelInputContainer = ({
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

export default Register;
