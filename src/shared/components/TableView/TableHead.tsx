import React, { ThHTMLAttributes } from 'react';

interface Props extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
}

const TableHead = (props: Props) => {
	const { children, title, ...remainingProps } = props;
	return (
		<th {...remainingProps}>
			{title}
			{children}
		</th>
	);
};

export default TableHead;
