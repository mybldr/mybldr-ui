import type { Meta, StoryObj } from "@storybook/react";

import { SideSheet, SideSheetProps } from "./SideSheet";

const meta = {
  title: "SideSheet",
  component: SideSheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SideSheet>;

export default meta;

type Story = StoryObj<typeof SideSheet>;

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const BaseSideSheet: Story = {
  args: {
    width: "400px",
    anchor: "right",
    open: true,
    title: "Title",
    sideSheet: LOREM,
    children: LOREM,
    primaryAction: {
      onClick: async () =>
        await new Promise((resolve) => setTimeout(resolve, 1000)),
      label: "Submit",
    },
    secondaryAction: {
      onClick: async () =>
        await new Promise((resolve) => setTimeout(resolve, 1000)),
      label: "Secondary",
    },
  },
};

export const ScrollSideSheet: Story = {
  args: {
    width: "400px",
    anchor: "right",
    open: true,
    title: "Title",
    sideSheet: Array(8).fill(LOREM).join(" "),
    children: LOREM,
    primaryAction: {
      onClick: async () =>
        await new Promise((resolve) => setTimeout(resolve, 1000)),
      label: "Submit",
    },
  },
};
