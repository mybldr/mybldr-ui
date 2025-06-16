import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./IconButton";
import { HouseOutlined } from "@mui/icons-material";

const meta = {
  title: "IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

export const BaseIconButton: Story = {
  args: {
    icon: <HouseOutlined />,
  },
};

export const LoadingIconButton: Story = {
  args: {
    icon: <HouseOutlined />,
    onClick: async () =>
      await new Promise((resolve) => setTimeout(resolve, 1000)),
  },
};
