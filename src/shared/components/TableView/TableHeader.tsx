import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLTableSectionElement> {
}

const TableHeader = (props: Props) => {
	return <thead {...props} />;
};

export default TableHeader;
