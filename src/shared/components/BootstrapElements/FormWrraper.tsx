import React, { FC, HTMLAttributes } from 'react';
import { FormEvent } from 'react';

interface Props extends HTMLAttributes<HTMLFormElement> {
    class?: string;
    id?: string;
    hasError?: boolean;
    action: (event: FormEvent<HTMLFormElement>) => void;
}

const BtsFormElement: FC<Props> = (props: Props) => {
    return (
        <form className={`${props.class ?? ''} ${props.hasError ? 'needs-validation' : ''}`} onSubmit={props.action} noValidate>
            {props.children}
        </form>
    )
};

export default BtsFormElement;