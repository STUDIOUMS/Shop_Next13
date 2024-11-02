"use client";

import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.webp";
import { NAV_ITEMS } from "../Header/constants";
import Socials from "../Socials";

const Footer = (): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={(theme) => ({
        bgcolor: theme.palette.grey[100],
        pt: 8,
        pb: 8,
      })}
    >
      <Container>
        <Grid2 container spacing={6}>
          <Grid2 size={{ lg: 3, xs: 12 }}>
            <div className="header-logo">
              <Image
                src={logo.src}
                alt=""
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
              />
            </div>
            &copy; 2023 site.com
          </Grid2>

          {isDesktop && (
            <>
              <Grid2 size={{ lg: 3, xs: 12 }}>
                <Typography variant="h3">Меню</Typography>
                <ul>
                  {NAV_ITEMS.map((el) => (
                    <li key={el.id}>
                      <Link href={el.path}>{el.title}</Link>
                    </li>
                  ))}
                </ul>
              </Grid2>

              <Grid2 size={{ lg: 3, xs: 12 }}>
                <Typography variant="h3">Категории</Typography>
              </Grid2>
            </>
          )}

          <Grid2 size={{ lg: 3, xs: 12 }}>
            <Typography variant="h3">Контакты</Typography>
            <Socials />
            <p>+7 (999) 999-99-99</p>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Footer;
