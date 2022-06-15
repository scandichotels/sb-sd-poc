import { ComponentStory, ComponentMeta } from "@storybook/react";

import TabsSc from "./TabsSc";

export default {
  title: "Components/TabsSc",
  component: TabsSc,
} as ComponentMeta<typeof TabsSc>;

const Template: ComponentStory<typeof TabsSc> = (args) => <TabsSc {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  orientation: "horizontal",
  textColor: "primary",
  indicatorColor: "primary",
};

export const Colored = Template.bind({});
Colored.args = {
  orientation: "horizontal",
  textColor: "secondary",
  indicatorColor: "secondary",
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
  textColor: "primary",
  indicatorColor: "primary",
};
