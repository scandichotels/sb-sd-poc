import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalSc from "./ModalSc";

export default {
  title: "Components/ModalSc",
  component: ModalSc,
} as ComponentMeta<typeof ModalSc>;

const Template: ComponentStory<typeof ModalSc> = (args) => (
  <ModalSc {...args} />
);

export const Default = Template.bind({});