import type { Meta, StoryObj } from "@storybook/react";

import { Banner } from "./Banner";
import { Button } from "./Button";

const meta = {
  title: "Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof Banner>;

export const BaseBanner: Story = {
  args: {
    children: "Banner description goes here",
  },
};

export const DismissableBanner: Story = {
  args: {
    children: "Banner description goes here",
    onClose: () => {},
  },
};

export const BannerWithAction: Story = {
  args: {
    children: "Banner description goes here",
    action: (
      <Button color="inherit" size="xsmall">
        Show All
      </Button>
    ),
  },
};

export const DismissableBannerWithAction: Story = {
  args: {
    children: "Banner description goes here",
    onClose: () => {},
    action: (
      <Button color="inherit" size="xsmall">
        Show All
      </Button>
    ),
  },
};
