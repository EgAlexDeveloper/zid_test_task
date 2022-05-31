import React, { useEffect, useState } from 'react';

import './Pagination.scss';

interface Props {
	pageNumber: number;
	pageSize: number;
	action: (data: any[]) => void;
	data: any[];
}

const PaginationComponent = (props: Props) => {
	const { pageSize, action } = props;
	const pagesLimit: number = 3;

	const [pages, setPagesCounts] = useState<number[]>([]);
	const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);

	useEffect(() => {
		if (props.data.length > 0) {
			let count = Math.ceil(props.data.length / pageSize);
			let list: number[] = [];

			for (let i = 0; i < count; i++) {
				list.push(i + 1);
			}

			setPagesCounts([...list]);
		}
	}, [props.data]);

	useEffect(() => {
		if (props.pageNumber) setCurrentPageNumber(props.pageNumber);
	}, [props.pageNumber]);

	const handlePagingChangeHandler = (pageNumber: number) => {
		let data: any[] = [];
		let startIndex: number = (pageNumber - 1) * pageSize;
		let endIndex: number = startIndex === 0 ? pageSize : (pageSize * pageNumber);

		setCurrentPageNumber(pageNumber);

		for (; startIndex < endIndex; startIndex++) {
			if (props.data.length > startIndex) {
				data.push(props.data[startIndex]);
			}
		}

		action(data);
	};

	const renderNumbers = () => {
		let start: number = currentPageNumber - (currentPageNumber > 1 ? 2 : 1);
		let listToBeRendered: number[] = [...pages.slice(start > 0 ? start : 0, currentPageNumber + pagesLimit)];

		return (
			<>
				{
					currentPageNumber > 1 &&
					<>
						<button className="btn" onClick={() => handlePagingChangeHandler(1)}>
							<i className="fas fa-angle-double-right" />
						</button>
						<button className="btn" onClick={() => handlePagingChangeHandler(currentPageNumber - 1)}>
							<i className="fas fa-chevron-right"></i>
						</button>
					</>
				}
				{
					listToBeRendered.map(i => (
						<button className={`btn ${currentPageNumber === i ? 'active' : ''}`} key={i} onClick={() => handlePagingChangeHandler(i)}>
							<span>{i}</span>
						</button>
					))
				}
				{
					currentPageNumber < pages.length &&
					<>
						<button className="btn" onClick={() => handlePagingChangeHandler(currentPageNumber + 1)}>
							<i className="fas fa-chevron-left"></i>
						</button>
						<button className="btn" onClick={() => handlePagingChangeHandler(pages[pages.length - 1])}>
							<i className="fas fa-angle-double-left" />
						</button>
					</>
				}

				{/* <input type='number' onChange={(event) => handlePagingChangeHandler(+event.target.value)} /> */}
			</>
		)
	}

	return (
		<div className='mu-pagination'>
			{renderNumbers()}
		</div>
	);
};

export default PaginationComponent;