import React, { TableHTMLAttributes } from 'react';

interface Props extends TableHTMLAttributes<HTMLTableElement> {
}

const Table = (props: Props) => {
	return <table {...props} />;
};

export default Table;
