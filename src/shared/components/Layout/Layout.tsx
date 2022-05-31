import React, { FC, useState, useEffect, HTMLAttributes } from 'react';
import { matchRoutes, Outlet, useLocation } from 'react-router-dom';

import './layout.scss';
import Row from '../BootstrapElements/Row';
import { Col, Container } from '../BootstrapElements';

import SideBar from '../SideBar';

import { routes } from '../../../container/routes';
import { RouterModel } from '../../types';

type Props = {};

const Layout: FC<Props | null> = (props: Props) => {
    const { pathname } = useLocation();

    const [isCenteredContent, setIsCenteredContent] = useState<boolean>(false);

    useEffect(() => {
        const matched = matchRoutes(routes, pathname)!;

        if (matched) {
            let matchedRoute = matched[0];
            let route: RouterModel = matchedRoute.route as RouterModel;

            setIsCenteredContent(route?.isCenteredContent!);
        }

    }, [pathname]);

    const retrieveContent = (): JSX.Element => (<Outlet />);

    return <>
        <WideLayout isCenteredContent={isCenteredContent}>
            {retrieveContent()}
        </WideLayout>
    </>;
};

interface LayoutProps extends HTMLAttributes<HTMLTextAreaElement> {
    isCenteredContent: boolean
}

const WideLayout = (props: LayoutProps) => (
    <Container isWide={true} class="h-100">
        <Row>
            <SideBar />

            <Col class={`col h-100 py-5 ${props.isCenteredContent ? 'm-auto' : ''}`}>
                <Row class="h-100">
                    <Col class="col-12 mb-auto">
                        {props.children}
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container >
)

export default Layout;