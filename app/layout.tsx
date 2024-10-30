"use client";

import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

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
            <main>{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
