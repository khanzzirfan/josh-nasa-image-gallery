/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useQuery } from "@tanstack/react-query";
import * as constants from "../constants";
import useApi from "./use-api";
import { filter, isEmpty, map } from "lodash";

const useGetRoverCuriosity = (earthdate: string, roverid: number) => {
  const api = useApi();
  return useQuery({
    queryKey: ["rovers", earthdate, roverid],
    queryFn: () =>
      // @ts-ignore
      api
        // @ts-ignore
        .get(`${constants.endpoints.roversCuriosity}${earthdate}`)
        .then(({ data }: any) => {
          let res: any = [];
          if (!isEmpty(data.photos)) {
            const photos = data.photos;
            const photoById = filter(photos, (f) => f.rover.id === roverid);
            res = map(photoById, (f) => ({
              img: f.img_src,
              id: f.rover.id,
              name: f.camera.name,
            }));
          }
          return res;
        }),
    refetchOnWindowFocus: false,
  });
};

export default useGetRoverCuriosity;
