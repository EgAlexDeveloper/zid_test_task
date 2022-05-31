import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLTableSectionElement> {
}

const TableBody = (props: Props) => {
	return <tbody {...props} />;
};

export default TableBody;
