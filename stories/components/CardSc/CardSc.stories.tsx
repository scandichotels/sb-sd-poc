import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardSc from "./CardSc";

export default {
  title: "Components/CardSc",
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