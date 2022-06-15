import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchInputSc from "./SearchInputSc";

export default {
  title: "Components/InputsSc/SearchInputSc",
  component: SearchInputSc,
} as ComponentMeta<typeof SearchInputSc>;

const Template: ComponentStory<typeof SearchInputSc> = (args) => (
  <SearchInputSc {...args} />
);

export const Default = Template.bind({});
