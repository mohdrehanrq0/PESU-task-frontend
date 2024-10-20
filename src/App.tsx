import './App.css';

import { AxiosError } from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { toast, Toaster } from 'sonner';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AuthContextProvider from './components/context/AuthContext.tsx';
import Dashboard from './components/dashboard/dashboard';
import Habit from './components/habit/habit';
import { LoginComponent } from './components/login/login';
import Progress from './components/progress/progress';
import Register from './components/register/register';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
      mutations: {
        throwOnError: false,
        onError: (err) =>
          err instanceof AxiosError &&
          err.response &&
          toast.error(err.response.data.message || err.response.data.error),
      },
    },
  });
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Toaster richColors closeButton />
          <div>
            <Routes>
              <Route path="/" Component={LoginComponent} />
              <Route path="/login" Component={LoginComponent} />
              <Route path="/register" Component={Register} />
              <Route path="/dashboard" Component={Dashboard} />
              <Route path="/habit" Component={Habit} />
              <Route path="/progress" Component={Progress} />
            </Routes>
          </div>
        </AuthContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
