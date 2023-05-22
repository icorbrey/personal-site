import { Meta, StoryObj } from '@storybook/react';
import { Heading } from 'components/Heading';

const meta = {
	title: 'Components/Heading',
	tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof Heading>;

export const AllLevels: Story = {
	render: () => <>
		<Heading.H1>Heading H1</Heading.H1>
		<Heading.H2>Heading H2</Heading.H2>
		<Heading.H3>Heading H3</Heading.H3>
		<Heading.H4>Heading H4</Heading.H4>
		<Heading.H5>Heading H5</Heading.H5>
		<Heading.H6>Heading H6</Heading.H6>
	</>
};

export const Level1: Story = {
	render: () => (
		<Heading.H1>Heading H1</Heading.H1>
	),
};

export const Level2: Story = {
	render: () => (
		<Heading.H2>Heading H2</Heading.H2>
	),
};

export const Level3: Story = {
	render: () => (
		<Heading.H3>Heading H3</Heading.H3>
	),
};

export const Level4: Story = {
	render: () => (
		<Heading.H4>Heading H4</Heading.H4>
	),
};

export const Level5: Story = {
	render: () => (
		<Heading.H5>Heading H5</Heading.H5>
	),
};

export const Level6: Story = {
	render: () => (
		<Heading.H6>Heading H6</Heading.H6>
	),
};
