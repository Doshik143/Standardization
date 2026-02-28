/**
 * @module gameStatsSelectors
 * @description Селектори для отримання статистики з Redux store
 */

/**
 * Повертає статистику конкретного користувача
 * @param {Object} state - Redux store
 * @param {string} userId - ID користувача
 * @returns {GameStats} Статистика користувача
 */
export const selectAllStats = (state) => state.gameStats.stats;
export const selectUserStats = (state, userId) =>
  state.gameStats.stats[userId] || {
    gamesPlayed: 0,
    gamesWon: 0,
    bestTime: null,
    bestSteps: null,
    totalSteps: 0,
    totalTime: 0,
  };
export const selectCurrentGame = (state) => state.gameStats.currentGame;
