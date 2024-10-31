import { Typography } from "@mui/material";
import { Box, BoxProps } from "@mui/system";

type SectionProps = BoxProps & {
  children: React.ReactNode;
  title?: string;
};

const Section = (props: SectionProps) => {
  const { children, title } = props;
  return (
    <Box sx={{ pt: 10, pb: 10 }} {...props}>
      {title && (
        <Typography
          variant="h1"
          component="div"
          textAlign="center"
          sx={{ mb: 8 }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default Section;
