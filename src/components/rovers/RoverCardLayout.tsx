import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { map, take } from "lodash";
import CardActionArea from "@mui/material/CardActionArea";
import * as React from "react";
import Button from "@mui/material/Button";

type ICameraProps = {
  id: string;
  name: string;
};

type ICardLayout = {
  name: string;
  id: number;
  landing_date: string;
  launch_date: string;
  total_photos: string;
  cameras: ICameraProps[];
  onClick: (id: number) => void;
};

export const CardLayout = ({
  onClick,
  id,
  name,
  landing_date,
  launch_date,
  total_photos,
  cameras,
}: ICardLayout) => {
  const [showAll, setShowAll] = React.useState(false);
  const [listlength, setListLength] = React.useState(3);
  const handleOnClick = () => {
    onClick(id);
  };

  const handleOnShowAll = (evt: any) => {
    evt.stopPropagation();
    const totalLen = cameras.length;
    setListLength(totalLen);
    setShowAll(true);
  };

  const handleOnShowLess = (evt: any) => {
    evt.stopPropagation();
    setListLength(3);
    setShowAll(false);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column" }}>
      <CardActionArea onClick={handleOnClick}>
        <CardHeader title={name} />
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Box display="flex">
              <Typography component="div" variant="subtitle1" mr={2}>
                Landing Date:
              </Typography>
              <Typography component="div" variant="subtitle1">
                {landing_date}
              </Typography>
            </Box>
            <Box display="flex">
              <Typography component="div" variant="subtitle1" mr={2}>
                Launch Date:
              </Typography>
              <Typography component="div" variant="subtitle1">
                {launch_date}
              </Typography>
            </Box>
            <Box display="flex">
              <Typography component="div" variant="subtitle1" mr={2}>
                Total Photos:
              </Typography>
              <Typography component="div" variant="subtitle1">
                {total_photos}
              </Typography>
            </Box>

            <Box display="flex">
              <Typography component="div" variant="subtitle1" mr={2}>
                Cameras
              </Typography>
              <Box
                display="flex"
                flexWrap={"wrap"}
                flexShrink={1}
                alignItems={"flex-star"}
                justifyContent={"flex-start"}
              >
                {map(take(cameras, listlength), (cam) => (
                  <Chip
                    key={cam.id}
                    label={cam.name}
                    variant="outlined"
                    size="small"
                    sx={{ mb: 0.3, mr: 0.3 }}
                  />
                ))}
                {!showAll && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleOnShowAll}
                    sx={{
                      width: "69px",
                      height: "25px",
                      background: "transparent",
                      border: "solid white 1px",
                      borderRadius: 2,
                      color: "white",
                      fontSize: "0.625rem",
                      padding: "2px",
                      margin: "2px",
                    }}
                  >
                    SHOW MORE
                  </Button>
                )}
                {showAll && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={handleOnShowLess}
                    sx={{
                      width: "69px",
                      height: "25px",
                      background: "transparent",
                      border: "solid white 1px",
                      borderRadius: 2,
                      color: "white",
                      fontSize: "0.625rem",
                      padding: "2px",
                      margin: "2px",
                    }}
                  >
                    SHOW LESS
                  </Button>
                )}
              </Box>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
