import React, { FC, HTMLAttributes } from 'react';
import close from '../../assets/img/icons/Close.svg';

interface props extends HTMLAttributes<HTMLTableRowElement> {
    title: string,
    action: (close: boolean) => void
}

const ModalHeader: FC<props> = (props: props) => {
    return (
        <div className="modal-header border-bottom-0">
            <h5 className="modal-title"> {props.title} </h5>
            <button onClick={() => props.action(false)} type="button" className="close">
                <img alt="" className="icon" src={close} />
            </button>
        </div>
    )
}

export default ModalHeader;