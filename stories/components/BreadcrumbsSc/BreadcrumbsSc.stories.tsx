import { ComponentStory, ComponentMeta } from "@storybook/react";

import BreadcrumbsSc from "./BreadcrumbsSc";

export default {
  title: "Components/BreadcrumbsSc",
  component: BreadcrumbsSc,
} as ComponentMeta<typeof BreadcrumbsSc>;

const Template: ComponentStory<typeof BreadcrumbsSc> = (args) => (
  <BreadcrumbsSc {...args} />
);

export const Default = Template.bind({});
