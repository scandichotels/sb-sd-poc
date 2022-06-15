import { ComponentStory, ComponentMeta } from "@storybook/react";

import DateTimePickerSc from "./DateTimePickerSc";

export default {
  title: "Components/DateTimePickerSc",
  component: DateTimePickerSc,
} as ComponentMeta<typeof DateTimePickerSc>;

const Template: ComponentStory<typeof DateTimePickerSc> = (args) => <DateTimePickerSc {...args} />;

export const Default = Template.bind({});