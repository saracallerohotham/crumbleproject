// /src/hooks/useRoute.js
import { useState, useCallback } from "react";
import { RouteHook } from "../types/Types"; // Asegúrate de que la ruta sea correcta

// Custom hook for managing route state and navigation
export function useRoute(): RouteHook {
  const [currentRoute, setCurrentRoute] =
    useState < string > window.location.hash;

  const navigateTo = useCallback((newRoute: string) => {
    window.location.hash = newRoute;
    setCurrentRoute(newRoute);
  }, []);

  return [currentRoute, navigateTo];
}
