import type { Meta, StoryObj } from "@storybook/react";
import Hero from "@/components/hero";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "App/Hero Section",
  component: Hero,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    imgSrc: {
      description: `A static image import or a public image url that will render the image`,
      type: "string",
    },
    opacity: {
      description: `The opacity of the overlay on the image`,
      type: "number",
      defaultValue: 0.3,
    },
    overlayOverrideStyle: {
      description: `An optional style to override the defined style of the overlay`,
    },
    imageOverrideStyle: {
      description: `An optional style to override the defined style of the underlying image`,
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Single: Story = {
  args: {
    imgSrc:
      "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    opacity: 0.3,
  },
  name: "Single Image Hero",
};
