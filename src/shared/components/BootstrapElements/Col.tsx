import React, { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    id?: string;
}

const BtsRow: FC<Props> = (props: Props) => {
    return (
        <div id={props.id} className={`${props.class ?? 'col-12'}`}>
            {props.children}
        </div>
    )
};

export default BtsRow;