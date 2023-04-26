import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import map from "lodash/map";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import isEmpty from "lodash/isEmpty";
import { useNavigate } from "react-router-dom";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
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
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {isLoading && (
          <>
            <Stack
              sx={{ color: "grey.500" }}
              spacing={2}
              direction="column"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CircularProgress color="secondary" />
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
                mx={2}
              >
                Loading...
              </Typography>
            </Stack>
          </>
        )}
        {!isLoading && isError && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">oops! failed to fetch data.</Alert>
          </Stack>
        )}
        {!isLoading &&
          !isEmpty(data) &&
          map(data, (item: any) => (
            <Grid item xs={12} sm={6} key={item.id}>
              <Item>
                <Grid container>
                  <Grid item xs={8}>
                    <Box mx={2}>
                      <Box display={"flex"} flexDirection={"row"}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                          mx={2}
                        >
                          Name:
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Box display={"flex"} flexDirection={"row"}>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          mx={2}
                          component="div"
                        >
                          Landing Date:
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {item.landing_date}
                        </Typography>
                      </Box>

                      <Box display={"flex"} flexDirection={"row"}>
                        <Typography
                          mx={2}
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          Launch Date:
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {item.launch_date}
                        </Typography>
                      </Box>

                      <Box display={"flex"} flexDirection={"row"}>
                        <Typography
                          mx={2}
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          Total Photos:
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          component="div"
                        >
                          {item.total_photos}
                        </Typography>
                      </Box>

                      <Box
                        mx={2}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                        justifyContent={"flex-start"}
                      >
                        <TreeView
                          aria-label="file system navigator"
                          defaultCollapseIcon={<ExpandMoreIcon />}
                          defaultExpandIcon={<ChevronRightIcon />}
                          sx={{
                            height: 240,
                            flexGrow: 1,
                            maxWidth: 400,
                            overflowY: "auto",
                          }}
                        >
                          <TreeItem nodeId="1" label="Cameras">
                            {map(item.cameras, (cam) => (
                              <TreeItem
                                key={cam.id}
                                nodeId={cam.id}
                                label={cam.name}
                              />
                            ))}
                          </TreeItem>
                        </TreeView>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box mx={2} display={"flex"} flexDirection={"row"}>
                      <Button
                        variant="outlined"
                        onClick={() => handleOnDetails(item.id)}
                        size="small"
                      >
                        Details
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
