import { AuthUserHttpClient } from '../../../lib/httpClient';

const PATH = {
  progressRoute: "/progress",
};

export const getUserProgress = async () => {
  return await AuthUserHttpClient.get(`${PATH.progressRoute}`);
};
