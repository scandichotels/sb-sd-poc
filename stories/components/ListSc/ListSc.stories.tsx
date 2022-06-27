import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListSc from "./ListSc";

export default {
  title: "Components/ListSc",
  // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=765%3A5772'
    }
  },
  component: ListSc,
} as ComponentMeta<typeof ListSc>;

const Template: ComponentStory<typeof ListSc> = (args) => <ListSc {...args} />;

export const Default = Template.bind({});
