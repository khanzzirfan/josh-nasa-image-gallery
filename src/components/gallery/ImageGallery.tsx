import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

type IImageGalleryProps = {
  data: any;
  isLoading: boolean;
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { data, isLoading } = props;

  return (
    <ImageList sx={{ height: 550 }} cols={3}>
      <>
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
        {map(data, (item: any) => (
          <ImageListItem key={item.id}>
            <img src={`${item.img}`} alt={item.name} loading="lazy" />
            <ImageListItemBar title={item.name} />
          </ImageListItem>
        ))}
        {!isLoading && isEmpty(data) && (
          <Typography mx={2}>No photos found.</Typography>
        )}
      </>
    </ImageList>
  );
};
