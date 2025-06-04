import type { Meta, StoryObj } from "@storybook/react";

import { Select, SelectProps } from "./Select";
import { useState } from "react";

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const ControlledSelect = (props: SelectProps<any>) => {
  const [value, setValue] = useState<any>("");
  return (
    <Select
      {...props}
      value={value}
      onChange={(e) => {
        setValue(Number(e.target.value));
      }}
    />
  );
};

export const BaseSelect: Story = {
  render: (props) => <ControlledSelect {...props} />,
  args: {
    label: "Label",
    placeholder: "Placeholder",
    sx: { width: "200px" },
    options: new Array(8).fill(0).map((_, i) => ({
      value: i,
      label: `Option ${i + 1}`,
    })),
  },
};
