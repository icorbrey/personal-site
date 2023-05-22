import { Navigation } from 'components/Navigation';
import { Meta, StoryObj } from '@storybook/react';
import { Icon } from 'components/Icon';

const meta = {
	title: 'Components/Navigation',
	component: Navigation,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Navigation>;

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
	args: {
		slots: {
			heading: <Navigation.Heading>Isaac Corbrey</Navigation.Heading>,
			socialLinks: <>
				<Navigation.SocialLink to='#' alt='Example'><Icon.GitHub /></Navigation.SocialLink>
				<Navigation.SocialLink to='#' alt='Example'><Icon.Twitter /></Navigation.SocialLink>
				<Navigation.SocialLink to='#' alt='Example'><Icon.LinkedIn /></Navigation.SocialLink>
			</>,
		}
	}
};
