"use client";

import { NextUIProvider } from "@nextui-org/system";

export default function App({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
