"use client";

import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { Container, Snackbar } from "@mui/material";
import { useAppStore } from "@/store/useAppStore";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  const { message } = useAppStore();

  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="app">
            <Header />
            <Container>{children}</Container>
            <Footer />
          </div>
          <Snackbar
            open={!!message}
            autoHideDuration={5000}
            onClose={() => {}}
            message="Note archived"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
