import React, { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string;
    id?: string;
    hasError?: boolean;
}

const BtsInputGroup: FC<Props> = (props: Props) => {
    return (
        <div className={`${props.class ?? ''} ${props.hasError ? 'has-validation' : ''}`}>
            {props.children}
        </div>
    )
};

export default BtsInputGroup;