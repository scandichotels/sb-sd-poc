import { ComponentStory, ComponentMeta } from "@storybook/react";

import AlertSc from "./AlertSc";

export default {
  title: "Components/AlertSc",
   // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
   parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=746%3A5764'
    }
  },
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
