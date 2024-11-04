"use client";

import { useState } from "react";
import { Box, Link } from "@mui/material";
import Navbar from "./NavBar";
import CustomBtn from "@/ui/CustomBtn";
import FeedbackModal from "../Modals/FeedbackModal";
import { MiddleHeader, Wrap } from "./styles";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import SmallCart from "./SmallCart";

const Header = (): JSX.Element => {
  const [feedBack, setFeedBack] = useState<boolean>(false);

  // const { data, isSuccess, isLoading } = useGetData<Response<Cat>>({
  //   key: ["cats"],
  //   uri: "/catalog/categories",
  // });

  return (
    <>
      <Box
        sx={(theme) => ({
          borderBottomColor: theme.palette.divider,
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          p: "16px 0",
        })}
      >
        <Wrap>
          <Navbar />
          <CustomBtn
            color="secondary"
            size="small"
            onClick={() => setFeedBack(true)}
          >
            Обратная связь
          </CustomBtn>
        </Wrap>
      </Box>

      <MiddleHeader>
        <Wrap>
          <Link href="/">
            <Image
              src={logo.src}
              alt=""
              width={50}
              height={50}
              style={{ objectFit: "contain" }}
            />
          </Link>

          <Box sx={{ ml: 8, mr: "auto" }}>
            {/* {isLoading && <CircularProgress size={24} />}
            {isSuccess && <CatPopup cats={[]} />} */}
          </Box>

          {/* <Search /> */}
          <SmallCart />
        </Wrap>
      </MiddleHeader>

      <FeedbackModal close={() => setFeedBack(false)} show={feedBack} />
    </>
  );
};

export default Header;
