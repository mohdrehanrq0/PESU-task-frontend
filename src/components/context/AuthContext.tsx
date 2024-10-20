import React, { createContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { useSession } from '../apiService/query/userQuery';

export interface AuthContextData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  session: any | null;
  isFetching: boolean;
  isFetchingFirstTime: boolean;
}

export const AuthContext = createContext<AuthContextData | null>(null);

const ROUTES_ALLOWED_WITHOUT_AUTH = ["/login", "/register"];

const AuthContextProvider = ({ children }: React.PropsWithChildren) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const {
    data: session,
    isFetching: isSessionFetching,
    isLoading: isSessionFetchingFirstTime,
  } = useSession();

  useEffect(() => {
    if (!isSessionFetching) {
      if (session) {
        return;
      } else {
        if (!ROUTES_ALLOWED_WITHOUT_AUTH.includes(pathname)) {
          toast.error("Please login to continue..");
          return navigate("/login");
        }
      }
    }
  }, [session, pathname, isSessionFetching, navigate]);

  return (
    <AuthContext.Provider
      value={{
        session: session?.data.user || null,
        isFetching: isSessionFetching,
        isFetchingFirstTime: isSessionFetchingFirstTime,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
