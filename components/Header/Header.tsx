"use client";

import { useState } from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./NavBar";
import CustomBtn from "@/ui/CustomBtn";
import CustomModal from "@/ui/CustomModal";
import FeedbackModal from "../Modals/FeedbackModal";

const Header = (): JSX.Element => {
  const [feedBack, setFeedBack] = useState<boolean>(false);

  return (
    <>
      <Box
        sx={(theme) => ({
          borderBottomColor: theme.palette.divider,
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          pt: 2,
          pb: 2,
        })}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Navbar />
          <CustomBtn
            color="secondary"
            size="small"
            onClick={() => setFeedBack(true)}
          >
            Обратная связь
          </CustomBtn>
        </Container>
      </Box>
      {/* <HeaderTop>
        <HeaderContainer className="container">
          <Navbar />
          <Btn
            title="Обратная связь"
            size="small"
            handler={() => setFeedBack(true)}
          />
        </HeaderContainer>
      </HeaderTop>

      <HeaderMiddle>
        <HeaderContainer className="container">
          <HeaderLogo>
            <Link href="/">
              <Image
                src={logo.src}
                alt=""
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </Link>
          </HeaderLogo>
          <CatPopup cats={[]} />
          <Search />
          <SmallCart />
        </HeaderContainer>
      </HeaderMiddle> */}

      <FeedbackModal close={() => setFeedBack(false)} show={feedBack} />
    </>
  );
};

export default Header;
