import React, { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLFormElement> {
    class?: string;
    id?: string;
    for?: string;
    placeholder?: string;
}

const BtsLabel: FC<Props> = (props: Props) => {
    return (
        <label htmlFor={props.for} id={props.id} className={`${props.class ?? ""} form-label form__label`}>
            <span>{props.placeholder}</span>

            {props.children}
        </label>
    )
};

export default BtsLabel;