import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { MyBLDRButton, MyBLDRButtonProps } from "mybldr-ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "MyBLDRButton",
  component: MyBLDRButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<MyBLDRButtonProps>;

export default meta;

type Story = StoryObj<MyBLDRButtonProps>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Primary Button",
  },
};
