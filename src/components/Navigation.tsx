import { TakesChildren, TakesOptionalSlots, TakesRequiredSlots } from 'utilities/props';
import styles from 'components/Navigation.module.css';
import { Heading } from 'components/Heading';

type Props =
	& TakesRequiredSlots<'heading' | 'socialLinks'>
	& TakesOptionalSlots<'pageLinks'>;

export const Navigation = ({ slots }: Props) => (
	<nav className={styles.navigation}>
		{slots.heading}
		<ul className={styles.pageLinks}>
			{slots.pageLinks}
		</ul>
		<ul className={styles.socialLinks}>
			{slots.socialLinks}
		</ul>
	</nav>
);

type HeadingProps = TakesChildren;

const NavigationHeading = ({ children }: HeadingProps) => (
	<Heading.H1 className={styles.heading}>
		{children}
	</Heading.H1>
);

type SocialLinkProps =
	& TakesChildren
	& {
		alt: string;
		to: string;
	};

const NavigationSocialLink = ({ alt, children, to }: SocialLinkProps) => (
	<a className={styles.socialLink} href={to} title={alt} target='_blank' rel='noreferrer noopener'>
		{children}
	</a>
);

Navigation.SocialLink = NavigationSocialLink;
Navigation.Heading = NavigationHeading;
