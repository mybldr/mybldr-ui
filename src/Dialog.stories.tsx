import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "./Dialog";

const meta = {
  title: "Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof Dialog>;

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const BaseDialog: Story = {
  args: {
    open: true,
    title: "Title",
    subtitle: "Subtitle",
    content: LOREM,
    actionDetails: "Details",
    primaryAction: {
      onClick: () => alert("Clicked!"),
      label: "Submit",
    },
  },
};

export const ScrollDialog: Story = {
  args: {
    open: true,
    title: "Title",
    content: Array(8).fill(LOREM).join(" "),
  },
};

export const LoadingDialog: Story = {
  args: {
    open: true,
    showLoadingOverlay: true,
    title: "Title",
    subtitle: "Subtitle",
    content: LOREM,
    primaryAction: {
      onClick: async () =>
        await new Promise((resolve) => setTimeout(resolve, 1000)),
      label: "Submit",
    },
    tertiaryAction: {
      onClick: async () =>
        await new Promise((resolve) => setTimeout(resolve, 1000)),
      label: "Tertiary",
    },
  },
};
