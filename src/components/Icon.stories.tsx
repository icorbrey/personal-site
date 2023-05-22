import { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'components/Icon';

const meta = {
	title: 'Components/Icon',
	tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const AllIcons: Story = {
	render: () => <>
		<Icon.GitHub />
		<Icon.LinkedIn />
		<Icon.Printables />
		<Icon.Twitter />
	</>
};

export const GitHub: Story = {
	render: () => <Icon.GitHub />,
	name: 'GitHub',
};

export const LinkedIn: Story = {
	render: () => <Icon.LinkedIn />,
	name: 'LinkedIn',
};

export const Printables: Story = {
	render: () => <Icon.Printables />,
	name: 'Printables',
};

export const Twitter: Story = {
	render: () => <Icon.Twitter />,
	name: 'Twitter',
};
