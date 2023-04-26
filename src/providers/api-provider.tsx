import axios, { AxiosInstance } from "axios";
import { createContext } from "react";

export const ApiContext = createContext({});

export const ApiContextProvider = ({ children }: any) => {
  const _axios: AxiosInstance = axios.create({
    baseURL: "https://api.nasa.gov/mars-photos/api/v1", //process.env.BASE_URL,
  });

  _axios.interceptors.request.use(async (req) => {
    // const token = await getAccessTokenSilently();
    // req.headers.authorization = `Bearer ${token}`;
    return req;
  });

  return <ApiContext.Provider value={_axios}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
