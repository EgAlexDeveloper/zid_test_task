import React, { FC, useEffect } from 'react';
import { Col } from '../BootstrapElements';

import './SideBar.scss';
import { Link } from 'react-router-dom';
import { useSelector } from '../../../container/store';
import { AppState } from '../../../container/types';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import useTranslations from '../../../container/i18n/useTranslations';
import { NavMenu, List } from './types';

import logo from '../../../assets/img/zid-logo.png'

type Props = {} & WrappedComponentProps;

const SideBar: FC<Props> = (props: Props) => {
    const msgs = useTranslations();
    const language = useSelector((state: AppState) => state.shared.language);

    useEffect(() => {
        let lang: string = language ?? "ar";
        localStorage.setItem("lang", lang);
    }, [language]);

    const returnNavList = (menu: NavMenu, i: number): JSX.Element => (
        <ul key={i}>
            {
                menu.title &&
                <h4><span>{props.intl.formatMessage({ id: menu.title })}</span></h4>
            }

            {
                menu.list.map((item, i) => (
                    <li key={i}>
                        {
                            item.isExternal ?
                                <a href={item.link} className={item.icon ? 'with-icon' : ''}>
                                    {
                                        item.icon &&
                                        <i className={`fas ${item.icon} icon`} />
                                    }
                                    <span>{props.intl.formatMessage({ id: item.text })}</span>
                                </a>
                                :
                                <Link to={item.link} className={item.icon ? 'with-icon' : ''}>
                                    {
                                        item.icon &&
                                        <i className={`fas ${item.icon} icon`} />
                                    }
                                    <span>{props.intl.formatMessage({ id: item.text })}</span>
                                </Link>
                        }
                    </li>
                ))
            }
        </ul>
    )

    return <>
        <Col class="col sidebar py-5 px-0">
            <Link to="/" className="d-flex logo">
                {/* <img className='m-auto lg' src={logo} alt="logo" />
                <img src={logo} className="sm" alt="logo-sm" /> */}
            </Link>

            <div className='user'>
                <h6>{msgs.sidebar.welcome}</h6>
                <i className='far fa-user icon' />
                <span>
                    {/* {TODO User Name should rendered from redux} */}
                    مصطفى ابراهيم
                </span>
            </div>

            <nav>
                {
                    List.map((item, i) => returnNavList(item, i))
                }
            </nav>

            <div className="sidebar__footer">
                <div className="sidebar__copyrights">
                    <div className="sidebar__copyrights-logo">
                        {/* <img src={logo} alt="ZID" /> */}
                    </div>
                    <span className="sidebar__copyrights-text">{msgs.sidebar.developedBy}</span>
                    <span className="sidebar__copyrights-text">{msgs.sidebar.copyrights}&copy;</span>
                </div>

            </div>
        </Col>
    </>
};

export default injectIntl(SideBar);