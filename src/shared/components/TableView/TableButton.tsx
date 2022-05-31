import React from 'react';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	className: string;
	dataToggle: string;
	dataTarget: string;
	ariaExpanded: boolean;
	ariaControls: string;

	onClick?: (e?: any) => void
}

const TableButton = (props: Props) => {
	const { children, className, dataToggle, dataTarget, ariaExpanded, ariaControls, onClick } = props;
	return (
		<button
			className={className}
			data-toggle={dataToggle}
			data-target={dataTarget}
			aria-expanded={ariaExpanded}
			aria-controls={ariaControls}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default TableButton;
