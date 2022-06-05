import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import useTranslations from '../../container/i18n/useTranslations';
import { Logger } from '../../container/utilities';
import { Col, FormErrors, InputControl, InputGroup, Label, Row } from '../../shared/components/BootstrapElements';

import { FormGroup, BaseValidator, FormControl, Validators } from "ms-react-reactive-form";

import {
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from '../../shared/components/Card';

import { Profile } from './types';
import { useIntl } from 'react-intl';
import { getProfileDetails } from './providers/api';
import BtsFormElement from '../../shared/components/BootstrapElements/FormWrraper';
import { LATIN_VALIDATOR, NOT_LATIN_VALIDATOR } from '../../shared/constants';

type Props = {};

const ProfileComponent: FC<Props> = (props: Props) => {
    const intl = useIntl();
    const isArabic = intl.locale === 'ar';
    const msgs = useTranslations();

    const form: FormGroup = new FormGroup({
        nameAr: new FormControl("", [Validators.required(), Validators.pattern(NOT_LATIN_VALIDATOR)]),
        nameEn: new FormControl("", [Validators.required(), Validators.pattern(LATIN_VALIDATOR)]),
        date_of_birth: new FormControl("", [Validators.required()]),
        gender: new FormControl("", [Validators.required()])
    });

    const [profile, updateProfile] = useState<Profile>();
    const [formState, updateForm] = useState<FormGroup>(form);

    useEffect(() => {
        // TODO call current profile details API
        // fetchCurrentProfileDetails
    }, []);

    const fetchCurrentProfileDetails = (): void => {
        getProfileDetails()
            .then(res => {
                if (res.profile) {
                    updateProfile(res.profile);
                }
            });
    };

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
                    // TODO call profile post API
                    // postProfileDetails(results.form.payload)
                }
            });
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        let { name, value, checked } = event.currentTarget;

        formState.controls[name].setValue(value);
        updateForm({ ...formState })
    };

    return <>
        <Card>
            <BtsFormElement action={submit} hasError={formState.validity} class="form-wrapper">
                <CardHeader>
                    <h5 className='my-2'>{msgs.profile.title}</h5>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col class='col-md-4'>
                            <InputGroup>
                                <Label placeholder={msgs.profile.nameAr} for="nameAr" />

                                <InputControl
                                    id="nameAr"
                                    name="nameAr"
                                    value={formState.controls.nameAr.value}
                                    action={onChange}
                                    hasError={!formState.controls.nameAr.validity}
                                    placeholder={msgs.profile.nameAr}

                                />

                                {
                                    !formState.controls.nameAr.validity &&
                                    <FormErrors control={formState.controls.nameAr} msg="profile.validations.nameAr" />
                                }
                            </InputGroup>
                        </Col>

                        <Col class='col-md-4'>
                            <InputGroup>
                                <Label placeholder={msgs.profile.nameEn} for="nameEn" />

                                <InputControl
                                    id="nameEn"
                                    name="nameEn"
                                    value={formState.controls.nameEn.value}
                                    action={onChange}
                                    hasError={!formState.controls.nameEn.validity}
                                    placeholder={msgs.profile.nameEn}

                                />

                                {
                                    !formState.controls.nameEn.validity &&
                                    <FormErrors control={formState.controls.nameEn} msg="profile.validations.nameEn" />
                                }
                            </InputGroup>
                        </Col>

                        <Col class='col-md-4'>
                            <InputGroup>
                                <Label placeholder={msgs.profile.date_of_birth} for="date_of_birth" />

                                <InputControl
                                    id="date_of_birth"
                                    name="date_of_birth"
                                    value={formState.controls.date_of_birth.value}
                                    action={onChange}
                                    hasError={!formState.controls.date_of_birth.validity}
                                    placeholder={msgs.profile.date_of_birth}
                                    type="date"

                                />

                                {
                                    !formState.controls.date_of_birth.validity &&
                                    <FormErrors control={formState.controls.date_of_birth} msg="profile.validations.date_of_birth" />
                                }
                            </InputGroup>
                        </Col>

                        <Col>
                            <InputGroup class="py-3">
                                <label className="form__radio">
                                    <input type="radio" name="gender" id="male" value="male" onChange={onChange} />
                                    <span className="form__radio_label">{msgs.profile.male}</span>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="form__radio">
                                    <input type="radio" name="gender" id="female" value="female" onChange={onChange} />
                                    <span className="form__radio_label">{msgs.profile.female}</span>
                                    <span className="checkmark"></span>
                                </label>

                                {
                                    !formState.controls.gender.validity &&
                                    <FormErrors class='d-block mt-3' control={formState.controls.gender} msg="profile.validations.gender" />
                                }
                            </InputGroup>
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

export default ProfileComponent;