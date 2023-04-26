import Container from "@mui/material/Container";
import useGetRovers from "../hooks/use-rovers-api";
import { RoversList } from "../components/rovers/RoversList";
import * as React from "react";

export const IndexPage: React.FC = () => {
  const { isLoading, data = [], isError } = useGetRovers();
  return (
    <Container maxWidth="lg" sx={{ marginTop: "10px", display: "flex" }}>
      <RoversList data={data} isLoading={isLoading} isError={isError} />
    </Container>
  );
};
