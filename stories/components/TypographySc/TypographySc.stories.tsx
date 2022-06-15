import { ComponentStory, ComponentMeta } from "@storybook/react";

import TypographySc from "./TypographySc";

export default {
  title: "Components/TypographySc",
  component: TypographySc,
} as ComponentMeta<typeof TypographySc>;

const Template: ComponentStory<typeof TypographySc> = (args) => (
  <TypographySc {...args} />
);

export const Default = Template.bind({});