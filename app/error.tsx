"use client";

import Section from "@/ui/Section";
import { Alert, AlertTitle } from "@mui/material";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error(props: ErrorProps) {
  return (
    <Section>
      <Alert variant="outlined" severity="error">
        <AlertTitle>500 - Ошибка сервера</AlertTitle>
        Попробуйте посетить данную страницу позже.
      </Alert>
    </Section>
  );
}
