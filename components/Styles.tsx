import { useTheme } from "@mui/material";
import { GlobalStyles } from "@mui/system";

const Styles = (): JSX.Element => {
  const theme = useTheme();
  return (
    <GlobalStyles
      styles={{
        body: {
          margin: 0,
          fontFamily: theme.typography.body1.fontFamily,
          fontSize: theme.typography.body1.fontSize,
          lineHeight: theme.typography.body1.lineHeight,
        },
        p: {
          marginBottom: theme.spacing(6),
          marginTop: theme.spacing(6),
        },
        ul: {
          marginBottom: theme.spacing(6),
          marginTop: theme.spacing(6),
          marginLeft: theme.spacing(4),
          padding: 0,
          li: {
            listStyle: "inside disc",
          },
        },
        a: {
          color: "inherit",
        },
      }}
    />
  );
};

export default Styles;
