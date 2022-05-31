import React, { FC, ChangeEvent, HTMLAttributes } from "react";
import { numbersOnly, numbersWithDots } from "../../constants";
import { BtsFormControlProps } from "../../models/BtsFormControlProps";

interface Props extends BtsFormControlProps {
    action(event: ChangeEvent<HTMLInputElement>): void;
    min?: number | string;
    max?: number;
    minlength?: number;
    maxlength?: number;
    hasError?: boolean;
    as?: "number" | "decimal";
}

type PropsType = Props & HTMLAttributes<HTMLInputElement>;

const BtsFormControl: FC<PropsType> = (props: PropsType) => {
    const change = (event: ChangeEvent<HTMLInputElement>) => {
        if (props.as === "number") {
            if (event.currentTarget.value.match(numbersOnly)) {
                let val = event.currentTarget.value.replace(numbersOnly, "");

                event.currentTarget.value = val;
            }
        }

        if (props.as === "decimal") {
            if (event.currentTarget.value.match(numbersWithDots)) {
                let val = event.currentTarget.value.replace(numbersWithDots, "");

                event.currentTarget.value = val;
            }
        }

        props.action(event);
    };

    return (
        <input
            id={props?.id}
            type={props.type ?? "text"}
            className={`${props.class ?? ""} ${props.hasError ? "is-invalid" : "is-valid"} ${props.hasBootstrapValidationIcons ? 'allow-icons' : 'remove-icons'} form__field form-control`}
            onChange={change}
            name={props.name ?? ""}
            value={props.value}
            placeholder={props.placeholder ?? ""}
            min={props.min}
            max={props.max}
            minLength={props.minlength}
            maxLength={props.maxlength}
            disabled={props.isDisabled}
            autoComplete="off"
            required={props.isRequired ?? false}
        />
    );
};

export default BtsFormControl;
