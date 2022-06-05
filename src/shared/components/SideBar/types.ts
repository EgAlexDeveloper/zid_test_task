export type NavItem = {
    link: string;
    icon?: string,
    text: string;
    isExternal?: boolean,
};

type NavList = {
    navList: NavItem[]
};

export type NavMenu = { list: NavItem[], title?: string };

export const Nav: NavList = {
    "navList": [{
        link: '/',
        icon: 'fa-user',
        text: 'sidebar.profile',
    },{
        link: '/payment',
        icon: 'fa-credit-card-front',
        text: 'sidebar.payment',
    }]
};

export const List: NavMenu[] = [
    { list: Nav.navList }
];