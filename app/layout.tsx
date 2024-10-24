"use client";

import "./globals.scss";
import Header from "@/components/Header/Header";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Toast from "@/ui/Toast";
import SCRegistry from "@/options/registry";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <SCRegistry>
      <html lang="en">
        <body>
          <Providers>
            <div className="app">
              <Header />
              <div className="container main_container">{children}</div>
              <Footer />
            </div>
            <ScrollToTop />
            <Toast />
          </Providers>
        </body>
      </html>
    </SCRegistry>
  );
};

export default RootLayout;
