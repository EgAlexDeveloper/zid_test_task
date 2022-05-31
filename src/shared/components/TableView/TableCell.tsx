import React, { TdHTMLAttributes } from 'react';

interface Props extends TdHTMLAttributes<HTMLTableDataCellElement> {
	width?: string
}

const TableCell = (props: Props) => {
	return <td style={{ width: props.width ? props.width : "" }} {...props} />;
};

export default TableCell;
