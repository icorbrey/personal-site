import { Navigation } from 'components/Navigation';
import styles from 'components/Layout.module.css';
import { Outlet } from 'react-router-dom';
import { Icon } from 'components/Icon';

export const Layout = () => (
	<div className={styles.layout}>
		<Navigation
			slots={{
				heading: <Navigation.Heading>Isaac Corbrey</Navigation.Heading>,
				socialLinks: <>
					<Navigation.SocialLink to='https://github.com/icorbrey' alt='@icorbrey on GitHub'>
						<Icon.GitHub />
					</Navigation.SocialLink>
					<Navigation.SocialLink to='https://www.printables.com/@icorbrey' alt='@icorbrey on Printables'>
						<Icon.Printables />
					</Navigation.SocialLink>
					<Navigation.SocialLink to='https://linkedin.com/in/icorbrey' alt='Isaac Corbrey on LinkedIn'>
						<Icon.LinkedIn />
					</Navigation.SocialLink>
					<Navigation.SocialLink to='https://twitter.com/icorbrey' alt='@icorbrey on Twitter'>
						<Icon.Twitter />
					</Navigation.SocialLink>
					<Navigation.SocialLink to='https://ko-fi.com/icorbrey' alt='Support Isaac Corbrey on Ko-Fi'>
						<Icon.KoFi />
					</Navigation.SocialLink>
				</>,
			}}
		/>
		<div className={styles.content}>
			<Outlet />
		</div>
	</div>
);
