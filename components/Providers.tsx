"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "@/theme";

type ProvidersProps = {
  children: React.ReactNode;
};

const client = new QueryClient();

const Providers = (props: ProvidersProps): JSX.Element => {
  const { children } = props;
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: {
              margin: 0,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: theme.typography.body1.fontSize,
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
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
