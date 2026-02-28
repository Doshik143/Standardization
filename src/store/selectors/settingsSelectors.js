/**
 * @module settingsSelectors
 * @description Селектори для отримання налаштувань з Redux store
 * @see Модуль {@link module:settingsSlice} для роботи з налаштуваннями
 */

export const selectSettings = (state) => state.settings;
export const selectDifficulty = (state) => state.settings.difficulty;
export const selectControls = (state) => state.settings.controls;
