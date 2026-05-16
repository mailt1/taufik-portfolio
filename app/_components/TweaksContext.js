"use client";

import { createContext, useContext } from "react";

export const TweaksContext = createContext({
  marquee: true,
});

export function useTweaksContext() {
  return useContext(TweaksContext);
}
