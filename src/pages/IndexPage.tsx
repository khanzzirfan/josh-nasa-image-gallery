import Container from "@mui/material/Container";
import useGetRovers from "../hooks/use-rovers-api";
import { RoversList } from "../components/rovers/RoversList";
import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export const IndexPage: React.FC = () => {
  const { isLoading, data = [] } = useGetRovers();
  return (
    <Container maxWidth="lg">
      {isLoading && (
        <Stack
          sx={{ color: "grey.500" }}
          spacing={2}
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress color="secondary" />
          <Typography gutterBottom variant="subtitle1" component="div" mx={2}>
            Loading...
          </Typography>
        </Stack>
      )}

      {!isLoading && <RoversList data={data} />}
    </Container>
  );
};
