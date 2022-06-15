import { ComponentStory, ComponentMeta } from "@storybook/react";

import CheckboxSc from "./CheckboxSc";

export default {
  title: "Components/InputsSc/CheckboxSc",
  component: CheckboxSc,
} as ComponentMeta<typeof CheckboxSc>;

const Template: ComponentStory<typeof CheckboxSc> = (args) => (
  <CheckboxSc {...args} />
);

export const Default = Template.bind({});
