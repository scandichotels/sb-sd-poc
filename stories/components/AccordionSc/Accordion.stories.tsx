import { ComponentStory, ComponentMeta } from "@storybook/react";

import AccordionSc from "./AccordionSc";

export default {
  title: "Components/AccordionSc",
  component: AccordionSc,
} as ComponentMeta<typeof AccordionSc>;

const Template: ComponentStory<typeof AccordionSc> = (args) => (
  <AccordionSc {...args} />
);

export const Default = Template.bind({});