import type { Meta, StoryObj } from "@storybook/react";

import { MyBLDRButton, MyBLDRButtonProps } from "mybldr-ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "MyBLDRButton",
  component: MyBLDRButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<MyBLDRButtonProps>;

export default meta;

type Story = StoryObj<MyBLDRButtonProps>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Primary Button",
  },
};
