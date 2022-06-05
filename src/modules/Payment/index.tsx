import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import useTranslations from '../../container/i18n/useTranslations';
import { Logger } from '../../container/utilities';

import { useIntl } from 'react-intl';
import BtsFormElement from '../../shared/components/BootstrapElements/FormWrraper';
import { Card, CardBody, CardHeader, CardFooter } from '../../shared/components/Card';
import { BaseValidator, FormControl, FormGroup, Validators } from 'ms-react-reactive-form';
import { IS_VISA_REGEX, LATIN_VALIDATOR, wholeNumbers, IS_MASTERCARD_REGEX } from '../../shared/constants';
import { Col, FormErrors, InputControl, InputGroup, Label, Row } from '../../shared/components/BootstrapElements';
import { CardType } from './types';

import visa from '../../assets/img/visa.svg';
import master_card from '../../assets/img/master.png';
import invalid_card from '../../assets/img/no-credit-card.png';

import './styles.scss';

type Props = {};

const Payment: FC<Props> = (props: Props) => {
    const intl = useIntl();
    const msgs = useTranslations();

    const form: FormGroup = new FormGroup({
        placeholder_name: new FormControl("", [Validators.required(), Validators.pattern(LATIN_VALIDATOR)]),
        card_number: new FormControl("", [Validators.required(), Validators.minLength(16), Validators.maxLength(16)]),
        cvv: new FormControl("", [Validators.minLength(3), Validators.maxLength(3), Validators.pattern(wholeNumbers)]),
        expiration_month: new FormControl("", [Validators.required(), Validators.min(1), Validators.max(12), Validators.maxLength(2), Validators.minLength(1), Validators.pattern(wholeNumbers)]),
        expiration_year: new FormControl("", [Validators.required(), Validators.min(new Date().getFullYear()), Validators.maxLength(4), Validators.minLength(2), Validators.pattern(wholeNumbers)])
    });


    const [formState, updateForm] = useState<FormGroup>(form);
    const [cardType, updateCardType] = useState<CardType>();

    const submit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        let validate = new BaseValidator(formState);
        validate.analysis()
            .then(controls => {
                let results = validate.result(controls);
                let form: FormGroup = new FormGroup({ ...results.form.controls });
                updateForm(form);

                Logger(results)
                if (results.form.validity) {
                    // TODO call Payment Card post API
                    // postPaymentCardDetails(results.form.payload)
                }
            });
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        let { name, value } = event.currentTarget;

        formState.controls[name].setValue(value);
        updateForm({ ...formState })
    };

    const onCardNumberChange = (event: ChangeEvent<HTMLInputElement>): void => {
        let { name, value } = event.currentTarget;
        let type: CardType;

        if (value.match(IS_VISA_REGEX)) {
            type = CardType.VISA;
        } else if (value.match(IS_MASTERCARD_REGEX)) {
            type = CardType.MASTER_CARD;
        } else {
            type = CardType.ELSE
        };

        updateCardType(type);

        formState.controls[name].setValue(value);
        updateForm({ ...formState })
    };

    return <>
        <Card>
            <BtsFormElement action={submit} hasError={formState.validity} class="form-wrapper">
                <CardHeader>
                    <h5 className='my-2'>{msgs.payment.title}</h5>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col class='col-md-9'>
                            <InputGroup>
                                <Label placeholder={msgs.payment.placeholder_name} for="placeholder_name" />

                                <InputControl
                                    id="placeholder_name"
                                    name="placeholder_name"
                                    value={formState.controls.placeholder_name.value}
                                    action={onChange}
                                    hasError={!formState.controls.placeholder_name.validity}
                                    placeholder={msgs.payment.placeholder_name}

                                />

                                {
                                    !formState.controls.placeholder_name.validity &&
                                    <FormErrors control={formState.controls.placeholder_name} msg="payment.validations.placeholder_name" />
                                }
                            </InputGroup>
                        </Col>

                        <Col class='col-md-3'>
                            <InputGroup>
                                <Label placeholder={msgs.payment.cvv} for="cvv" />

                                <InputControl
                                    id="cvv"
                                    name="cvv"
                                    value={formState.controls.cvv.value}
                                    action={onChange}
                                    hasError={!formState.controls.cvv.validity}
                                    placeholder={msgs.payment.cvv}
                                    as="number"
                                    maxlength={3}
                                />

                                {
                                    !formState.controls.cvv.validity &&
                                    <FormErrors control={formState.controls.cvv} msg="payment.validations.cvv" />
                                }
                            </InputGroup>
                        </Col>

                        <Col class='col-md-6'>
                            <InputGroup>
                                <Label placeholder={msgs.payment.card_number} for="card_number" />

                                <div className='payment-number-w'>
                                    <InputControl
                                        id="card_number"
                                        name="card_number"
                                        value={formState.controls.card_number.value}
                                        action={onCardNumberChange}
                                        hasError={!formState.controls.card_number.validity || cardType == CardType.ELSE}
                                        placeholder={msgs.payment.card_number}
                                        maxlength={16}
                                        minlength={16}
                                        as="number"
                                    />

                                    {
                                        cardType &&
                                        <span className='card-type'>
                                            {
                                                cardType == CardType.ELSE &&
                                                <img src={invalid_card} />
                                            }

                                            {
                                                cardType == CardType.VISA &&
                                                <img src={visa} />
                                            }

                                            {
                                                cardType == CardType.MASTER_CARD &&
                                                <img src={master_card} />
                                            }
                                        </span>
                                    }

                                    {
                                        cardType == CardType.ELSE &&
                                        <div className={`invalid-feedback d-block`}>
                                            <span className="d-block">{msgs.payment.validations.card_number.invalid}</span>
                                        </div>
                                    }

                                    {
                                        !formState.controls.card_number.validity &&
                                        <FormErrors control={formState.controls.card_number} msg="payment.validations.card_number" />
                                    }
                                </div>
                            </InputGroup>
                        </Col>

                        <Col class='col-md-6'>
                            <InputGroup>
                                <Label placeholder={msgs.payment.expiryDate} for="" />
                            </InputGroup>

                            <div className={`date ${(!formState.controls.expiration_month.validity || !formState.controls.expiration_year.validity) ? 'is-invalid' : ''}`}>
                                <div className='control'>
                                    <InputControl
                                        id="expiration_month"
                                        name="expiration_month"
                                        value={formState.controls.expiration_month.value}
                                        action={onChange}
                                        as="number"
                                        hasError={!formState.controls.expiration_month.validity}
                                        placeholder={msgs.payment.expiryMonth}
                                        maxlength={2}
                                        minlength={1}

                                    />
                                </div>

                                <div className='control'>
                                    <InputControl
                                        id="expiration_year"
                                        name="expiration_year"
                                        as="number"
                                        value={formState.controls.expiration_year.value}
                                        action={onChange}
                                        hasError={!formState.controls.expiration_year.validity}
                                        placeholder={msgs.payment.expiryYear}
                                        maxlength={4}
                                        minlength={4}
                                    />
                                </div>
                            </div>


                            <Row>
                                <Col class='col-6'>
                                    <FormErrors class='d-block' control={formState.controls.expiration_month} msg="payment.validations.expiryMonth" />
                                </Col>

                                <Col class='col-6'>
                                    <FormErrors class='d-block' control={formState.controls.expiration_year} msg="payment.validations.expiryYear" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>

                <CardFooter class='text-sm-start'>
                    <button type='button' className='btn btn-danger my-2 mx-2'>{msgs.common.cancel}</button>
                    <button className='btn btn-primary my-2'>{msgs.common.save}</button>
                </CardFooter>
            </BtsFormElement>
        </Card>
    </>
};

export default Payment;