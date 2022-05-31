import React, { FC } from 'react';
import useTranslations from '../../../container/i18n/useTranslations';
import { useSelector, useDispatch } from '../../../container/store';
import { AppState } from '../../../container/types';
import { changeLanguage } from '../../redux/actions';

type Props = {
    className?: string;
}

const Switcher: FC<Props> = (props: Props) => {
    const dispatch = useDispatch();
    const msgs = useTranslations();
    const language = useSelector((state: AppState) => state.shared.language);

    let lang: string | null = localStorage.getItem("lang");

    if (!lang) {
        lang = "en";
        localStorage.setItem("lang", lang);
    }

    return (
        <a className={props.className!} id="changeLanguage" href="#" onClick={() => { dispatch(changeLanguage(language == "ar" ? "en" : "ar")) }}>
            {language == "ar" ? msgs.common.en : msgs.common.ar}
        </a>
    )
}

export default Switcher;