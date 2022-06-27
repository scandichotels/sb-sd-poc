import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputSc from "./InputSc";

export default {
  title: "Components/InputsSc/InputSc",
  // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=116%3A89'
    }
  },
  component: InputSc,
} as ComponentMeta<typeof InputSc>;

const Template: ComponentStory<typeof InputSc> = (args) => (
  <InputSc {...args} />
);

export const Filled = Template.bind({});
Filled.args = {
  label: "Filled",
  variant: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined",
  variant: "outlined",
};

export const Standard = Template.bind({});
Standard.args = {
  label: "Standard",
  variant: "standard",
};
