import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import Typography from "@mui/material/Typography";

type IImageGalleryProps = {
  data: any;
};

export const ImageGallery = (props: IImageGalleryProps) => {
  const { data } = props;

  return (
    <ImageList sx={{ height: 550 }} cols={3}>
      <>
        {map(data, (item: any) => (
          <ImageListItem key={item.id}>
            <img src={`${item.img}`} alt={item.name} loading="lazy" />
            <ImageListItemBar title={item.name} />
          </ImageListItem>
        ))}
        {isEmpty(data) && <Typography mx={2}>No photos found.</Typography>}
      </>
    </ImageList>
  );
};
