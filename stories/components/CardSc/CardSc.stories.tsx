import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardSc from "./CardSc";

export default {
  title: "Components/CardSc",
  // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=962%3A8087'
    }
  },
  component: CardSc,
} as ComponentMeta<typeof CardSc>;

const Template: ComponentStory<typeof CardSc> = (args) => <CardSc {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  variant: "elevation",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};