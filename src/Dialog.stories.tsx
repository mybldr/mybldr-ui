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
  argTypes: {
    disablePortal: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    disablePortal: true,
    open: true,
    title: "Title",
    subtitle: "Subtitle",
    content: LOREM,
    actionDetails: "Details",
    primaryAction: {
      onClick: () => alert("Clicked!"),
      text: "Submit",
    },
  },
};

export const ScrollDialog: Story = {
  argTypes: {
    disablePortal: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    disablePortal: true,
    open: true,
    title: "Title",
    content: Array(5).fill(LOREM).join(" "),
    showDivider: true,
  },
};

export const LoadingDialog: Story = {
  argTypes: {
    disablePortal: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    disablePortal: true,
    open: true,
    showLoadingOverlay: true,
    title: "Title",
    subtitle: "Subtitle",
    content: LOREM,
    primaryAction: {
      onClick: async () =>
        await new Promise((resolve) => setTimeout(resolve, 1000)),
      text: "Submit",
    },
    tertiaryAction: {
      onClick: async () =>
        await new Promise((resolve) => setTimeout(resolve, 1000)),
      text: "Tertiary",
    },
  },
};
