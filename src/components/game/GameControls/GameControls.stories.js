import React from "react";
import GameControls from "./GameControls";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Game/GameControls",
  component: GameControls,
  tags: ["autodocs"],
  argTypes: {
    onMove: { action: "moved" },
    activeDirection: {
      control: "select",
      options: ["up", "down", "left", "right", null],
      description: "Поточний активний напрямок",
    },
  },
};

const Template = (args) => <GameControls {...args} />;

//Var1: Normal State
export const Default = Template.bind({});
Default.args = {
  onMove: (direction) => console.log(`Moved ${direction}`),
  activeDirection: null,
};
Default.parameters = {
  docs: {
    description: {
      story: "Кнопки керування в звичайному стані, жодна не активна",
    },
  },
};

//Var2: Active Button "up"
export const UpActive = Template.bind({});
UpActive.args = {
  onMove: (direction) => console.log(`Moved ${direction}`),
  activeDirection: "up",
};
UpActive.parameters = {
  docs: {
    description: {
      story: 'Демонстрація активної кнопки "вгору" (після натискання)',
    },
  },
};

//Var3: Active Button "right"
export const RightActive = Template.bind({});
RightActive.args = {
  onMove: (direction) => console.log(`Moved ${direction}`),
  activeDirection: "right",
};
RightActive.parameters = {
  docs: {
    description: {
      story: 'Демонстрація активної кнопки "вправо"',
    },
  },
};

export const Interactive = Template.bind({});
Interactive.args = {
  onMove: (direction) => console.log(`Moved ${direction}`),
  activeDirection: null,
};

Interactive.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const upButton = canvas.getByText("↑");
  await userEvent.click(upButton);
};
