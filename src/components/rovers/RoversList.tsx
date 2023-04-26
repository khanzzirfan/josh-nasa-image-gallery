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

  const apiData = {
    rovers: [
      {
        id: 5,
        name: "Curiosity",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
        max_sol: 3808,
        max_date: "2023-04-23",
        total_photos: 646513,
        cameras: [
          {
            id: 20,
            name: "FHAZ",
            rover_id: 5,
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            id: 26,
            name: "NAVCAM",
            rover_id: 5,
            full_name: "Navigation Camera",
          },
          {
            id: 22,
            name: "MAST",
            rover_id: 5,
            full_name: "Mast Camera",
          },
          {
            id: 23,
            name: "CHEMCAM",
            rover_id: 5,
            full_name: "Chemistry and Camera Complex",
          },
          {
            id: 24,
            name: "MAHLI",
            rover_id: 5,
            full_name: "Mars Hand Lens Imager",
          },
          {
            id: 25,
            name: "MARDI",
            rover_id: 5,
            full_name: "Mars Descent Imager",
          },
          {
            id: 21,
            name: "RHAZ",
            rover_id: 5,
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
      {
        id: 7,
        name: "Spirit",
        landing_date: "2004-01-04",
        launch_date: "2003-06-10",
        status: "complete",
        max_sol: 2208,
        max_date: "2010-03-21",
        total_photos: 124550,
        cameras: [
          {
            id: 27,
            name: "FHAZ",
            rover_id: 7,
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            id: 29,
            name: "NAVCAM",
            rover_id: 7,
            full_name: "Navigation Camera",
          },
          {
            id: 30,
            name: "PANCAM",
            rover_id: 7,
            full_name: "Panoramic Camera",
          },
          {
            id: 31,
            name: "MINITES",
            rover_id: 7,
            full_name: "Miniature Thermal Emission Spectrometer (Mini-TES)",
          },
          {
            id: 32,
            name: "ENTRY",
            rover_id: 7,
            full_name: "Entry, Descent, and Landing Camera",
          },
          {
            id: 28,
            name: "RHAZ",
            rover_id: 7,
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
      {
        id: 6,
        name: "Opportunity",
        landing_date: "2004-01-25",
        launch_date: "2003-07-07",
        status: "complete",
        max_sol: 5111,
        max_date: "2018-06-11",
        total_photos: 198439,
        cameras: [
          {
            id: 14,
            name: "FHAZ",
            rover_id: 6,
            full_name: "Front Hazard Avoidance Camera",
          },
          {
            id: 16,
            name: "NAVCAM",
            rover_id: 6,
            full_name: "Navigation Camera",
          },
          {
            id: 17,
            name: "PANCAM",
            rover_id: 6,
            full_name: "Panoramic Camera",
          },
          {
            id: 18,
            name: "MINITES",
            rover_id: 6,
            full_name: "Miniature Thermal Emission Spectrometer (Mini-TES)",
          },
          {
            id: 19,
            name: "ENTRY",
            rover_id: 6,
            full_name: "Entry, Descent, and Landing Camera",
          },
          {
            id: 15,
            name: "RHAZ",
            rover_id: 6,
            full_name: "Rear Hazard Avoidance Camera",
          },
        ],
      },
      {
        id: 8,
        name: "Perseverance",
        landing_date: "2021-02-18",
        launch_date: "2020-07-30",
        status: "active",
        max_sol: 774,
        max_date: "2023-04-24",
        total_photos: 152346,
        cameras: [
          {
            id: 33,
            name: "EDL_RUCAM",
            rover_id: 8,
            full_name: "Rover Up-Look Camera",
          },
          {
            id: 35,
            name: "EDL_DDCAM",
            rover_id: 8,
            full_name: "Descent Stage Down-Look Camera",
          },
          {
            id: 36,
            name: "EDL_PUCAM1",
            rover_id: 8,
            full_name: "Parachute Up-Look Camera A",
          },
          {
            id: 37,
            name: "EDL_PUCAM2",
            rover_id: 8,
            full_name: "Parachute Up-Look Camera B",
          },
          {
            id: 38,
            name: "NAVCAM_LEFT",
            rover_id: 8,
            full_name: "Navigation Camera - Left",
          },
          {
            id: 39,
            name: "NAVCAM_RIGHT",
            rover_id: 8,
            full_name: "Navigation Camera - Right",
          },
          {
            id: 40,
            name: "MCZ_RIGHT",
            rover_id: 8,
            full_name: "Mast Camera Zoom - Right",
          },
          {
            id: 41,
            name: "MCZ_LEFT",
            rover_id: 8,
            full_name: "Mast Camera Zoom - Left",
          },
          {
            id: 42,
            name: "FRONT_HAZCAM_LEFT_A",
            rover_id: 8,
            full_name: "Front Hazard Avoidance Camera - Left",
          },
          {
            id: 43,
            name: "FRONT_HAZCAM_RIGHT_A",
            rover_id: 8,
            full_name: "Front Hazard Avoidance Camera - Right",
          },
          {
            id: 44,
            name: "REAR_HAZCAM_LEFT",
            rover_id: 8,
            full_name: "Rear Hazard Avoidance Camera - Left",
          },
          {
            id: 45,
            name: "REAR_HAZCAM_RIGHT",
            rover_id: 8,
            full_name: "Rear Hazard Avoidance Camera - Right",
          },
          {
            id: 34,
            name: "EDL_RDCAM",
            rover_id: 8,
            full_name: "Rover Down-Look Camera",
          },
          {
            id: 46,
            name: "SKYCAM",
            rover_id: 8,
            full_name: "MEDA Skycam",
          },
          {
            id: 47,
            name: "SHERLOC_WATSON",
            rover_id: 8,
            full_name: "SHERLOC WATSON Camera",
          },
          {
            id: 48,
            name: "SUPERCAM_RMI",
            rover_id: 8,
            full_name: "SuperCam Remote Micro Imager",
          },
          {
            id: 49,
            name: "LCAM",
            rover_id: 8,
            full_name: "Lander Vision System Camera",
          },
        ],
      },
    ],
  };

  let apiServerData = data;
  if (isEmpty(data)) {
    apiServerData = apiData.rovers;
  }

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
          !isEmpty(apiServerData) &&
          map(apiServerData, (item: any) => (
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
