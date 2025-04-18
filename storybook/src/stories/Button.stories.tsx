import type { Meta, StoryObj } from "@storybook/react";

import { BldrButton, BldrButtonProps } from "mybldr-ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "MyBLDRButton",
  component: BldrButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<BldrButtonProps>;

export default meta;

type Story = StoryObj<BldrButtonProps>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Primary Button",
  },
};
