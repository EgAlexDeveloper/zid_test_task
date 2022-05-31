import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLTableRowElement> {
}

const TableRow = (props: Props) => {
	return <tr {...props} />;
};

export default TableRow;
