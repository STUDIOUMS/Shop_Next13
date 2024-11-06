import Section from "@/ui/Section";
import { Skeleton } from "@mui/material";

const CarouselLoading = (): JSX.Element => {
  return (
    <Section>
      <Skeleton variant="rounded" height={180} sx={{ mb: 10 }} />
    </Section>
  );
};

export default CarouselLoading;
