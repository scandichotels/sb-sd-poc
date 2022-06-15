import { ComponentStory, ComponentMeta } from "@storybook/react";

import DropdownSc from "./DropdownSc";

export default {
  title: "Components/DropdownSc",
  component: DropdownSc,
} as ComponentMeta<typeof DropdownSc>;

const Template: ComponentStory<typeof DropdownSc> = (args) => (
  <DropdownSc {...args} />
);

export const Default = Template.bind({});
