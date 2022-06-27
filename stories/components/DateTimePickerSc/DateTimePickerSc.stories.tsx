import { ComponentStory, ComponentMeta } from "@storybook/react";

import DateTimePickerSc from "./DateTimePickerSc";

export default {
  title: "Components/DateTimePickerSc",
  // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
  parameters: {
    design: {
       type: 'figma',
       url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=921%3A6437'
    }
  },
  component: DateTimePickerSc,
} as ComponentMeta<typeof DateTimePickerSc>;

const Template: ComponentStory<typeof DateTimePickerSc> = (args) => <DateTimePickerSc {...args} />;

export const Default = Template.bind({});