import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonSc from "./ButtonSc";

export default {
  title: "Components/InputsSc/ButtonSc",
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=820%3A5699'
    }
  },
  component: ButtonSc,
} as ComponentMeta<typeof ButtonSc>;

const Template: ComponentStory<typeof ButtonSc> = (args) => (
  <ButtonSc {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "contained",
  color: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "contained",
  color: "secondary",
  label: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "contained",
  color: "primary",
  label: "Button",
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  variant: "contained",
  color: "primary",
  label: "Button",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  variant: "contained",
  color: "primary",
  label: "Button",
  size: "large",
};
