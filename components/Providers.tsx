"use client";

import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import Styles from "./Styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ProvidersProps = {
  children: React.ReactNode;
};

const client = new QueryClient();

const Providers = (props: ProvidersProps): JSX.Element => {
  const { children } = props;
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Styles />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
