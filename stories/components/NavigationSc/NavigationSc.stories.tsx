import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavigationSc from "./NavigationSc";

export default {
  title: "Components/NavigationSc",
  component: NavigationSc,
} as ComponentMeta<typeof NavigationSc>;

const Template: ComponentStory<typeof NavigationSc> = (args) => (
  <NavigationSc {...args} />
);

export const Default = Template.bind({});
