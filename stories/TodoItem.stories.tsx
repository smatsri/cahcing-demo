import type { Meta, StoryObj } from "@storybook/react";

import TodoItem from "@/components/TodoItem";

const meta: Meta<typeof TodoItem> = {
  title: "Todos/TodoItem",
  component: TodoItem,
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Primary: Story = {
  args: {
    todo: {
      id: 1,
      userId: 1,
      completed: false,
      title: "my first todo",
    },
  },
};
