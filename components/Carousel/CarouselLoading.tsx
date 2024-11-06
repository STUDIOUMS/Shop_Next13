import { Skeleton } from "@mui/material";

const CarouselLoading = (): JSX.Element => {
  return <Skeleton variant="rounded" height={180} sx={{ mb: 10 }} />;
};

export default CarouselLoading;
