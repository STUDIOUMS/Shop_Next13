"use client";

import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import { Container } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: LayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="app">
            <Header />
            <Container>{children}</Container>
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
