import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cuKoFi, cuPrintables } from 'components/Icon.custom';
import { TakesClassName } from 'utilities/props';

const PrintablesIcon = ({ className }: TakesClassName) => <FontAwesomeIcon icon={cuPrintables} className={className} />;
const LinkedInIcon = ({ className }: TakesClassName) => <FontAwesomeIcon icon={faLinkedin} className={className} />;
const TwitterIcon = ({ className }: TakesClassName) => <FontAwesomeIcon icon={faTwitter} className={className} />;
const GitHubIcon = ({ className }: TakesClassName) => <FontAwesomeIcon icon={faGithub} className={className} />;
const KoFiIcon = ({ className }: TakesClassName) => <FontAwesomeIcon icon={cuKoFi} className={className} />;

export const Icon = {
	Printables: PrintablesIcon,
	LinkedIn: LinkedInIcon,
	Twitter: TwitterIcon,
	GitHub: GitHubIcon,
	KoFi: KoFiIcon,
};
