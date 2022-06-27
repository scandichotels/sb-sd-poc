import { ComponentStory, ComponentMeta } from "@storybook/react";

import DropdownSc from "./DropdownSc";

export default {
  title: "Components/DropdownSc",
  // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=1444%3A16135'
    }
  },
  component: DropdownSc,
} as ComponentMeta<typeof DropdownSc>;

const Template: ComponentStory<typeof DropdownSc> = (args) => (
  <DropdownSc {...args} />
);

export const Default = Template.bind({});
