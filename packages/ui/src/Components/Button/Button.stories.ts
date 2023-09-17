import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me!',
    variant: 'primary',
    onClick: () => console.log('Clicked!')
  },
}

export const Secondary: Story = {
  args: {
    children: 'Click me!',
    variant: 'secondary',
    onClick: () => console.log('Clicked!')
  },
}
