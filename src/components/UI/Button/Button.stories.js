import React from "react";
import Button from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Варіант стилізації кнопки",
    },
    children: {
      control: "text",
      description: "Текст кнопки",
    },
    onClick: { action: "clicked" },
    disabled: {
      control: "boolean",
      description: "Чи вимкнена кнопка",
    },
  },
};

const Template = (args) => <Button {...args} />;

//Var1: Primary Button
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Почати гру",
  disabled: false,
};
Primary.parameters = {
  docs: {
    description: {
      story: "Основна кнопка для головних дій (почати гру, зберегти)",
    },
  },
};

//Var2: Secondary Button
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Налаштування",
  disabled: false,
};
Secondary.parameters = {
  docs: {
    description: {
      story: "Другорядна кнопка для додаткових дій",
    },
  },
};

//Var3: Disabled Button
export const Disabled = Template.bind({});
Disabled.args = {
  variant: "primary",
  children: "Завершити гру",
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: "Вимкнена кнопка (наприклад, поки не можна натискати)",
    },
  },
};

export const Interactive = Template.bind({});
Interactive.args = {
  variant: "primary",
  children: "Натисни мене",
  disabled: false,
};
