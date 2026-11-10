"use client";

import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onMedia = () => {
    if (!localStorage.getItem("theme")) {
      applyTheme(media.matches ? "dark" : "light", false);
    }
  };
  media.addEventListener("change", onMedia);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onMedia);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function applyTheme(theme: Theme, persist: boolean) {
  document.documentElement.setAttribute("data-theme", theme);
  if (persist) localStorage.setItem("theme", theme);
  listeners.forEach((fn) => fn());
}

/**
 * Theme state lives on <html data-theme>, which is set before first paint by the
 * inline script in app/layout.tsx. This hook just subscribes to it.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    applyTheme(getSnapshot() === "light" ? "dark" : "light", true);
  }, []);

  return { theme, toggleTheme };
}
