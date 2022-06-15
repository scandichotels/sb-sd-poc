import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListSc from "./ListSc";

export default {
  title: "Components/ListSc",
  component: ListSc,
} as ComponentMeta<typeof ListSc>;

const Template: ComponentStory<typeof ListSc> = (args) => <ListSc {...args} />;

export const Default = Template.bind({});
