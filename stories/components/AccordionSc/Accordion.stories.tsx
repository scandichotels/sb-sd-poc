import { ComponentStory, ComponentMeta } from "@storybook/react";

import AccordionSc from "./AccordionSc";

export default {
  title: "Components/AccordionSc",
  // This is a Figma Plugin thing – read following article: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
  parameters: {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/bXRH1P1rLzUqPJaLsC4Ura/Figma-Tokens-PoC-%E2%80%93-Design-System-2.0-(Copy)?node-id=1379%3A13203'
    }
  },
  component: AccordionSc,
} as ComponentMeta<typeof AccordionSc>;

const Template: ComponentStory<typeof AccordionSc> = (args) => (
  <AccordionSc {...args} />
);

export const Default = Template.bind({});