import Container from "@mui/material/Container";
import useGetRovers from "../hooks/use-rovers-api";
import { RoversList } from "../components/rovers/RoversList";
import * as React from "react";
import { Box, Typography } from "@mui/material";

export const IndexPage: React.FC = () => {
  const { isLoading, data = [], isError } = useGetRovers();
  return (
    <Container maxWidth="lg" sx={{ marginTop: "10px", display: "flex" }}>
      <Box
        display="flex"
        flexDirection={"column"}
        flex={1}
        justifyContent={"flex-start"}
      >
        <Box>
          <Typography variant="h1" component="h2">
            Rovers
          </Typography>
        </Box>
        <RoversList data={data} isLoading={isLoading} isError={isError} />
      </Box>
    </Container>
  );
};
