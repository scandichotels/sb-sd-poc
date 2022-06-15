import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlertSc from "./AlertSc";

export default {
  title: "Components/AlertSc",
  component: AlertSc,
} as ComponentMeta<typeof AlertSc>;

const Template: ComponentStory<typeof AlertSc> = (args) => (
  <AlertSc {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  title: "Error",
  severity: "error",
  text: "In ac dui quis mi consectetuer lacinia!",
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: "Error",
  variant: "outlined",
  severity: "error",
  text: "In ac dui quis mi consectetuer lacinia!",
};

export const Filled = Template.bind({});
Filled.args = {
  title: "Error",
  variant: "filled",
  severity: "error",
  text: "In ac dui quis mi consectetuer lacinia!",
};
