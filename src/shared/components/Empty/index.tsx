import React, { FC } from 'react';

import empty from '../../../assets/img/emptystate@1.5x.svg';

type Props = {
    title: string;
    class: string;
}

const Empty: FC<Props> = (props: Props) => (
    <>
        <div className={`card-type-5 bg-light-gray ${props.class} text-center`}>
            <img alt="" src={empty} />

            <p className='mb-0 regular text-xs'>{props.title}</p>
        </div>
    </>
)

export default Empty;