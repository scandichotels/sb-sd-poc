import { ComponentStory, ComponentMeta } from "@storybook/react";

import TabsSc from "./TabsSc";

export default {
  title: "Components/TabsSc",
  // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=759%3A5992'
    }
  },
  component: TabsSc,
} as ComponentMeta<typeof TabsSc>;

const Template: ComponentStory<typeof TabsSc> = (args) => <TabsSc {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  orientation: "horizontal",
  textColor: "primary",
  indicatorColor: "primary",
};

export const Colored = Template.bind({});
Colored.args = {
  orientation: "horizontal",
  textColor: "secondary",
  indicatorColor: "secondary",
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
  textColor: "primary",
  indicatorColor: "primary",
};
