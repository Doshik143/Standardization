import { useState, useCallback } from "react";

/**
 * @module useNavigation
 * @description Хук для управління навігацією між сторінками
 * @deprecated Використовується тільки в старій версії, замінено на React Router
 */
export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState("start");

  const navigateToStart = useCallback(() => {
    setCurrentPage("start");
  }, []);

  const navigateToGame = useCallback(() => {
    setCurrentPage("game");
  }, []);

  const navigateToResults = useCallback(() => {
    setCurrentPage("results");
  }, []);

  return {
    currentPage,
    navigateToStart,
    navigateToGame,
    navigateToResults,
  };
};
