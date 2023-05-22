import { PropsWithChildren, ReactNode } from 'react';

export type TakesRequiredSlots<S extends string> = {
	slots: {
		[key in S]: ReactNode;
	};
};

export type TakesOptionalSlots<S extends string> = {
	slots?: {
		[key in S]?: ReactNode;
	};
};

export type TakesChildren = PropsWithChildren;

export type TakesClassName = {
	className?: string;
};
