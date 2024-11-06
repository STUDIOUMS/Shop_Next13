import { Box, BoxProps, styled, Typography } from "@mui/material";

type FilterItemProps = {
  children: React.ReactNode;
  title?: string;
};

const Div = styled(Box)<BoxProps>(({ theme }) => ({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.palette.grey[300],
  borderRadius: "6px",
  marginBottom: theme.spacing(4),
  padding: theme.spacing(4),
}));

const FilterItem = (props: FilterItemProps): JSX.Element => {
  const { children, title } = props;
  return (
    <Div>
      {title && <Typography variant="h5">{title}</Typography>}
      <Box>{children}</Box>
    </Div>
  );
};

export default FilterItem;
