import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "@mui/material";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { ArrowDropDown, HouseOutlined } from "@mui/icons-material";

const meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Base: Story = {
  args: {
    children: [
      <Button key="1">Label</Button>,
      <Button key="2">Label</Button>,
      <Button key="3">Label</Button>,
    ],
    variant: "contained",
    size: "large",
  },
};

export const LoadingButtonGroup: Story = {
  args: {
    children: [
      <Button
        key="1"
        onClick={async () =>
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      >
        Label
      </Button>,
      <Button
        key="2"
        onClick={async () =>
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      >
        Label
      </Button>,
      <Button
        key="3"
        onClick={async () =>
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
      >
        Label
      </Button>,
    ],
    variant: "outlined",
    size: "large",
  },
};

export const WithIcons: Story = {
  args: {
    children: [
      <Button key="1" startIcon={<HouseOutlined />}>
        Label
      </Button>,
      <Button key="2">Label</Button>,
      <Button key="3" endIcon={<HouseOutlined />}>
        Label
      </Button>,
    ],
    variant: "outlined",
    size: "large",
  },
};

export const WithDropdown: Story = {
  args: {
    children: [
      <Button key="1">Label</Button>,
      <IconButton key="2" icon={<ArrowDropDown />} />,
    ],
    variant: "outlined",
    size: "large",
  },
};
