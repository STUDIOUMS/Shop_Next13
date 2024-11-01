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
          styles={(theme) => ({
            body: {
              margin: 0,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: theme.typography.body1.fontSize,
            },
            a: {
              color: "inherit",
            },
          })}
        />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
