# 🧩 Maze Runner

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-1.9.5-764abc.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Лабіринт-гра, де гравець керує персонажем у сітці-лабіринті. Мета — дійти від стартової точки до виходу, уникаючи тупиків. Проект створено в рамках курсу "Компонентно-орієнтоване програмування".

---

## 🎮 Про гру

- **Керування**: клавіші стрілок / WASD або кнопки на екрані
- **Рівні складності**: легкий (9x9), середній (13x13), складний (17x17)
- **Статистика**: час, кроки, успішність
- **Рейтинг гравців**: таблиця результатів з топ-3 медалями

---

## 🛠 Технології

- **Frontend**: React 18 (functional components + hooks)
- **Стейт менеджмент**: Redux Toolkit (3 слайси: settings, gameStats, user)
- **Стилізація**: Styled Components
- **Маршрутизація**: React Router v6 (динамічні маршрути з :userId)
- **Форми**: React Hook Form (з валідацією)
- **Збереження даних**: LocalStorage
- **Збірка**: Create React App

---

## 📁 Структура проекту

```
src/
├── components/          # Перевикористовувані компоненти
|   ├── forms            # SettingsForm
|   ├── game/            # GameControls, GameOverDialog, MazeGrid
│   ├── layout/          # Header
│   ├── UI/              # Button, CookiePopup, Modal
│   └──
├── context/             # SettingsContext, UserStatsContext
├── hooks/               # useGame, useGameControls, useNavigation
├── pages/               # GamePage, ResultsPage, ResultsTable, StartPage, UserProfile
├── store/               # Redux store
│   ├── selectors/       # gameStatsSelectors, settingsSelectors
│   └── slices/          # gameStatsSlice, settingsSlice, userSlice
└──
```

---

## 🚀 Встановлення та запуск

```bash
# Клонувати репозиторій
git clone https://github.com/Doshik143/Standardization.git

# Перейти в папку проекту
cd Standardization

# Встановити залежності
npm install

# Запустити проект
npm start
```

Після запуску проект буде доступний за адресою: `http://localhost:3000`

---

## 📦 Команди

| Команда             | Опис                     |
| ------------------- | ------------------------ |
| `npm start`         | Запуск в режимі розробки |
| `npm run build`     | Збірка для продакшну     |
| `npm test`          | Запуск тестів            |
| `npm run storybook` | Запуск Storybook         |
| `npm run docs`      | Генерація документації   |

---

## 📜 Ліцензія

Цей проект ліцензовано під ліцензією MIT. Див. файл [LICENSE](LICENSE).

---

## ✍️ Автор

> Daryna Dzinzilevych; ІПЗ-23-2; 2025

---

## 🎯 Функціональні можливості

- ✅ Генерація лабіринтів різної складності
- ✅ Керування клавішами / кнопками
- ✅ Система статистики та результатів
- ✅ Налаштування гри (складність, тип керування)
- ✅ Профіль користувача з редагуванням
- ✅ Таблиця рейтингів з медалями
- ✅ Збереження даних в LocalStorage

---

## 📖 Документація

- [JSDoc документація](./docs/App.js.html) → [VideoDemo](./docs/video/docs-demo.mp4) ←
- [Storybook](./)
- [Політика конфіденційності](./PRIVACY.md)
- [Умови використання](./EULA.md)

---

## 🍪 Cookie Popup

Проект відповідає вимогам GDPR. При першому відвідуванні з'являється повідомлення про використання cookies.

---

## 🐛 Відомі проблеми

_Якщо знайдеш баги — створи Issue у репозиторії!_
