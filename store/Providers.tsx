"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { Suspense } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Suspense>{children}</Suspense>
    </Provider>
  );
}
