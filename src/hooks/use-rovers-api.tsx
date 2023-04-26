/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useQuery } from "@tanstack/react-query";
import * as constants from "../constants";
import useApi from "./use-api";

const useGetRovers = () => {
  const api = useApi();

  return useQuery({
    queryKey: ["rovers"],
    queryFn: () =>
      // @ts-ignore
      api.get(`${constants.endpoints.rovers}`).then(({ data }: any) => {
        return data.rovers;
      }),
    refetchOnWindowFocus: false,
  });
};

export default useGetRovers;
