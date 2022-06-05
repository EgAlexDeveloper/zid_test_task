import React from 'react';
import { Control } from 'ms-react-reactive-form/models';
import { useIntl } from 'react-intl';

interface Props {
    control: Control,
    msg: string,
    class?: string
}

const BtsFormErrors = (props: Props) => {
    const intl = useIntl();

    return (
        <>
            {
                (!props.control.validity && props.control.errors) &&
                <div className={`invalid-feedback ${props.class}`}>
                    {
                        props.control.errors['required'] &&
                        <span className="d-block">{intl.formatMessage({ id: `${props.msg}.required` })}</span>
                    }

                    {
                        props.control.errors['pattern'] &&
                        <span className="d-block">{intl.formatMessage({ id: `${props.msg}.pattern` })}</span>}

                    {
                        props.control.errors['min'] &&
                        <span className="d-block">{intl.formatMessage({ id: `${props.msg}.min` })}</span>
                    }

                    {
                        props.control.errors['max'] &&
                        <span className="d-block">{intl.formatMessage({ id: `${props.msg}.max` })}</span>}

                    {
                        props.control.errors['minLength'] &&
                        <span className="d-block">{intl.formatMessage({ id: `${props.msg}.minLength` })}</span>}

                    {
                        props.control.errors['maxLength'] &&
                        <span className="d-block">{intl.formatMessage({ id: `${props.msg}.maxLength` })}</span>}

                    {
                        props.control.errors['serverError'] &&
                        <span className="d-block">{intl.formatMessage({ id: `${props.msg}.serverError` })}</span>
                    }

                    {
                        props.control.errors['customError'] &&
                        <span className="d-block">{intl.formatMessage({ id: `${props.msg}.customError` })}</span>
                    }
                </div>
            }
        </>
    );
}

export default BtsFormErrors;