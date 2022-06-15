import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectSc from "./SelectSc";

export default {
  title: "Components/InputsSc/SelectSc",
  component: SelectSc,
} as ComponentMeta<typeof SelectSc>;

const Template: ComponentStory<typeof SelectSc> = (args) => (
  <SelectSc {...args} />
);

export const Filled = Template.bind({});
Filled.args = {
  title: "Age",
  variant: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
  title: "Age",
  variant: "outlined",
};

export const Standard = Template.bind({});
Standard.args = {
  title: "Age",
  variant: "standard",
};
