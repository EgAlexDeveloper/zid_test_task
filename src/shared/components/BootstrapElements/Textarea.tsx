import React, { FC, FormEvent, HTMLAttributes } from 'react';
import { BtsFormControlProps } from '../../models/BtsFormControlProps';

interface PropsType extends HTMLAttributes<HTMLTextAreaElement> {
    action(event: FormEvent<HTMLTextAreaElement>): void;
    minlength?: number;
    maxlength?: number;
}

type Props = PropsType & BtsFormControlProps;

const BtsTextarea: FC<Props> = (props: Props) => {
    return (
        <textarea
            id={props?.id}
            name={props.name ?? ""}
            value={props.value}
            className={`${props.class ?? ""} form-control`}
            onChange={props.action}
            placeholder={props.placeholder ?? ""}
            minLength={props.minlength}
            maxLength={props.maxlength}
            disabled={props.isDisabled}
            autoComplete="off"
            required={props.isRequired ?? false}
        ></textarea>
    )
};

export default BtsTextarea;