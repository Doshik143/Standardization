import { createSlice } from "@reduxjs/toolkit";

const loadSettingsFromStorage = () => {
  const savedSettings = localStorage.getItem("mazeRunnerSettings");
  return savedSettings
    ? JSON.parse(savedSettings)
    : {
        difficulty: "medium",
        controls: "keyboard",
      };
};

/**
 * @module settingsSlice
 * @description Redux слайс для налаштувань гри
 */

/**
 * @typedef {Object} Settings
 * @property {string} difficulty - Рівень складності ('easy', 'medium', 'hard')
 * @property {string} controls - Тип керування ('keyboard', 'buttons')
 */

/**
 * Оновлює налаштування гри
 * @param {Settings} state - Поточний стан
 * @param {Object} action - Redux action
 * @returns {Settings} Новий стан
 */
const settingsSlice = createSlice({
  name: "settings",
  initialState: loadSettingsFromStorage(),
  reducers: {
    updateSettings: (state, action) => {
      const newSettings = { ...state, ...action.payload };
      localStorage.setItem("mazeRunnerSettings", JSON.stringify(newSettings));
      return newSettings;
    },
    resetSettings: (state) => {
      const defaultSettings = {
        difficulty: "medium",
        controls: "keyboard",
      };
      localStorage.setItem(
        "mazeRunnerSettings",
        JSON.stringify(defaultSettings),
      );
      return defaultSettings;
    },
  },
});

export const { updateSettings, resetSettings } = settingsSlice.actions;

export const selectSettings = (state) => state.settings;
export const selectDifficulty = (state) => state.settings.difficulty;
export const selectControls = (state) => state.settings.controls;

export default settingsSlice.reducer;
