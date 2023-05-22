import { Meta, StoryObj } from '@storybook/react';
import { Layout } from 'components/Layout';

const meta = {
	title: 'Components/Layout',
	tags: ['autodocs'],
	component: Layout,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Layout>;

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
	args: {}
};
