import React, { FC, useEffect, useState } from 'react';
import useTranslations from '../../container/i18n/useTranslations';
import { Logger } from '../../container/utilities';
import { Col, Row } from '../../shared/components/BootstrapElements';

import {
    Card,
    CardBody,
    CardHeader
} from '../../shared/components/Card';

import { Profile } from './types';
import { Link, useNavigate } from 'react-router-dom';
import MotionLoading from '../../shared/components/MotionLoading';
import { useIntl } from 'react-intl';
import { getProfileDetails } from './providers/api';
import { idText } from 'typescript';

type Props = {};

const Crs: FC<Props> = (props: Props) => {
    const intl = useIntl();
    const isArabic = intl.locale === 'ar';
    const msgs = useTranslations();
    let navigate = useNavigate();
    const [profile, updateProfile] = useState<Profile>();

    useEffect(() => {
        getProfileDetails()
            .then(res => {
                if(res.profile) updateProfile(res.profile)
            });
    }, [])

    return <>
        <div className='crList'>
            <h2 className="card__title">{msgs.profile.title}</h2>
        </div>
    </>
};

export default Crs;