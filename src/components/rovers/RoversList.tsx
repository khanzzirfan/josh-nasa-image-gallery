import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import map from "lodash/map";
import Typography from "@mui/material/Typography";
import isEmpty from "lodash/isEmpty";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { CardLayout } from "./RoverCardLayout";

type IRoversListProps = {
  data: any;
  isLoading: boolean;
  isError: boolean;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const RoversList = (props: IRoversListProps) => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = props;

  const handleOnDetails = (id: number) => {
    navigate(`/details/${id}`);
  };

  return (
    <Box
      sx={{ width: "100%" }}
      display={"flex"}
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      mt={2}
    >
      {isLoading && (
        <Stack
          sx={{ color: "grey.500" }}
          spacing={2}
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress sx={{ color: "white" }} />
          <Typography gutterBottom variant="subtitle1" component="div" mx={2}>
            Loading...
          </Typography>
        </Stack>
      )}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {!isLoading && isError && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">oops! failed to fetch data.</Alert>
          </Stack>
        )}
        {!isLoading &&
          !isEmpty(data) &&
          map(data, (item: any) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <Item>
                <CardLayout
                  id={item.id}
                  name={item.name}
                  landing_date={item.landing_date}
                  launch_date={item.launch_date}
                  total_photos={item.total_photos}
                  cameras={item.cameras}
                  onClick={handleOnDetails}
                />
              </Item>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
