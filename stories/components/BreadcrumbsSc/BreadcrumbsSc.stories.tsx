import { ComponentStory, ComponentMeta } from "@storybook/react";

import BreadcrumbsSc from "./BreadcrumbsSc";

export default {
  title: "Components/BreadcrumbsSc",
  // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=759%3A5810'
    }
  },
  component: BreadcrumbsSc,
} as ComponentMeta<typeof BreadcrumbsSc>;

const Template: ComponentStory<typeof BreadcrumbsSc> = (args) => (
  <BreadcrumbsSc {...args} />
);

export const Default = Template.bind({});
