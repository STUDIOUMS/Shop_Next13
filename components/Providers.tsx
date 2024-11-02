"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import Styles from "./Styles";

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
