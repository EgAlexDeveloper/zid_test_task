import React, { FC, HTMLAttributes, useEffect } from 'react';
import { hideScroll } from '../../container/utilities';

interface props extends HTMLAttributes<HTMLTableRowElement> {
    className: string;
    isWide?: boolean;
    isTall?: boolean;
    isCentered?: boolean;
}

const Modal: FC<props> = (props: props) => {
    useEffect(() => {
        hideScroll(document.body, false);
    }, []);

    useEffect(() => {
        return () => {
            hideScroll(document.body, true);
        };
    }, []);


    return (
        <div className={`modal fade show d-block ${props.className}`}>
            <div className={`modal-dialog ${props?.isWide === true ? 'lg' : ''} ${props.isCentered ? 'modal-dialog-centered' : ''}`}>
                <div className={`modal-content ${props?.isTall === true ? 'tall' : ''}`}>
                    {props.children}
                </div>
            </div>
        </div >
    )
}

export default Modal;