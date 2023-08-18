"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    "50": "#fef4ee",
    "100": "#fde6d7",
    "200": "#fbc9ad",
    "300": "#f8a479",
    "400": "#f36a36",
    "500": "#f0501f",
    "600": "#e23714",
    "700": "#bb2713",
    "800": "#952117",
    "900": "#781e16",
  },
};

export const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
