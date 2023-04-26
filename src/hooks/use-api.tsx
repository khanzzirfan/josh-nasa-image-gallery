import { useContext } from "react";
import { ApiContext } from "../providers/api-provider";

const useApi = () => useContext(ApiContext);

export default useApi;
