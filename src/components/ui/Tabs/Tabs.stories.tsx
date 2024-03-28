import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const meta = {
  title: "Example/Tabs",
  component: Tabs,
  parameters: {
    layout: "none",
  },
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Tab1</TabsContent>
      <TabsContent value="password">Tab2</TabsContent>
    </Tabs>
  ),
};
