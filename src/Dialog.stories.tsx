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
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    primaryAction: {
      onClick: () => alert("Clicked!"),
      text: "Submit",
    },
  },
};
