import { ComponentStory, ComponentMeta } from "@storybook/react";

import DialogSc from "./DialogSc";

export default {
  title: "Components/DialogSc",
  component: DialogSc,
} as ComponentMeta<typeof DialogSc>;

const Template: ComponentStory<typeof DialogSc> = (args) => (
  <DialogSc {...args} />
);

export const Default = Template.bind({});