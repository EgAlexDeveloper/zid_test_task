import { ChangeEvent, FC, HTMLAttributes, useMemo, useState } from 'react';
import useTranslations from '../../../container/i18n/useTranslations';
import "./BTselect.scss";

interface Props extends HTMLAttributes<HTMLInputElement> {
    class?: string;
    id?: string;
    name?: string;
    type?: string;
    value?: string | number;
    locale?: string;
    action(event: ChangeEvent<HTMLSelectElement>): void;
    hasError?: boolean;
    options: any[] | null;
    isArabic: boolean;
    renderKey: string;
    selectOption?: boolean;
}

const BTSelect: FC<Props> = (props: Props) => {
    const msgs = useTranslations();

    return (
        <div className={`select-wrapper`}>
            {
                props.options && props.options.length > 0 &&
                <select
                    id={props?.id}
                    className={`form-control form__field ${props?.class} custom__select`}
                    onChange={props.action}
                    name={props.name}
                    value={props?.value}
                    defaultValue=""
                >
                    <option value="" disabled>{msgs.common.select}</option>
                    {
                        props.options.map((option: any) => (
                            <option value={option.id} key={option.id}>
                                {
                                    props.isArabic ? option.ArabicName : option.EnglishName
                                }
                            </option>
                        ))
                    }
                </select>
            }
        </div>
    );
};

export default BTSelect;
