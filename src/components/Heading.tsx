import styles from 'components/Heading.module.css';
import { TakesChildren, TakesClassName } from 'utilities/props';

type Props =
	& TakesChildren
	& TakesClassName;

const getClassNames = (...classNames: (string | undefined)[]) =>
	classNames.filter(Boolean).join(' ');

const H1 = ({ children, className }: Props) => (
	<h1 className={getClassNames(styles.h1, className)}>
		{children}
	</h1>
);

const H2 = ({ children, className }: Props) => (
	<h2 className={getClassNames(styles.h2, className)}>
		{children}
	</h2>
);

const H3 = ({ children, className }: Props) => (
	<h3 className={getClassNames(styles.h3, className)}>
		{children}
	</h3>
);

const H4 = ({ children, className }: Props) => (
	<h4 className={getClassNames(styles.h4, className)}>
		{children}
	</h4>
);

const H5 = ({ children, className }: Props) => (
	<h5 className={getClassNames(styles.h5, className)}>
		{children}
	</h5>
);

const H6 = ({ children, className }: Props) => (
	<h6 className={getClassNames(styles.h6, className)}>
		{children}
	</h6>
);

export const Heading = {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
};
