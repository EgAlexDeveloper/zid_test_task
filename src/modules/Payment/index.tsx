import React, { FC } from 'react';
import useTranslations from '../../container/i18n/useTranslations';
import { Logger } from '../../container/utilities';

import { useIntl } from 'react-intl';

type Props = {};

const Payment: FC<Props> = (props: Props) => {
    const intl = useIntl();
    const msgs = useTranslations();

    return <>
        <div className='crList'>
            <h2 className="card__title">{msgs.payment.title}</h2>
        </div>
    </>
};

export default Payment;