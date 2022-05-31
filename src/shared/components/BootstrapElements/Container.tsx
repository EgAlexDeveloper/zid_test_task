import React, { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    id?: string;
    isWide?: boolean
}

const BtsContainer: FC<Props> = (props: Props) => {
    return (
        <div id={props.id} className={`${props.class ?? ''} container${!props.isWide ? '' : '-fluid'}`}>
            {props.children}
        </div>
    )
};

export default BtsContainer;