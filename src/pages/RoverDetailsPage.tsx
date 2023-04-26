import React from "react";
import Container from "@mui/material/Container";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { ImageGallery } from "../components/gallery/ImageGallery";
import useGetRoverCuriosity from "../hooks/use-rovers-curiosity-api";
import { format, isValid, parse } from "date-fns";
import { useParams } from "react-router-dom";

const viewFormat = "dd-MM-yyyy";
const apiDateFormat = "yyyy-MM-dd";

export const RoverDetailsPage = () => {
  const { id } = useParams();
  const today = format(new Date(), viewFormat);
  const [date, setDate] = React.useState(today);
  const dt = format(parse(date, viewFormat, new Date()), apiDateFormat);
  const { isLoading, data } = useGetRoverCuriosity(dt, Number(id));

  const handleDateChange = (date: any) => {
    const selectedFormatDate = isValid(new Date(date))
      ? format(new Date(date), viewFormat)
      : date;
    setDate(selectedFormatDate);
  };

  const selectedDate = date ? parse(date, viewFormat, new Date()) : null;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="lg">
        <Box
          sx={{ width: "100%" }}
          display={"flex"}
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          mt={2}
        >
          <Paper elevation={0} sx={{ margingTop: "16px" }}>
            <Box>
              <Typography variant="h1" component="h2">
                Rovers Details
              </Typography>
            </Box>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} mt={3}>
                <Box display={"inline-flex"} alignItems={"center"}>
                  <Typography mx={2}>Date</Typography>
                  <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    format={viewFormat}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <ImageGallery
                  data={data}
                  isLoading={isLoading}
                  roverId={Number(id)}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </LocalizationProvider>
  );
};
