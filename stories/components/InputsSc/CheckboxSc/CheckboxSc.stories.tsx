import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckboxSc from "./CheckboxSc";

export default {
  title: "Components/InputsSc/CheckboxSc",
   // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
   parameters: {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=1444%3A16135'
    }
  },
  component: CheckboxSc,
} as ComponentMeta<typeof CheckboxSc>;

const Template: ComponentStory<typeof CheckboxSc> = (args) => (
  <CheckboxSc {...args} />
);

export const Default = Template.bind({});
