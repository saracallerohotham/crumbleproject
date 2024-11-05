import { useState, useCallback } from "react";
import { RouteHook } from "../types/Types";
export function useRoute(): RouteHook {
  const [currentRoute, setCurrentRoute] =
    useState < string > window.location.hash;

  const navigateTo = useCallback((newRoute: string) => {
    window.location.hash = newRoute;
    setCurrentRoute(newRoute);
  }, []);

  return [currentRoute, navigateTo];
}
