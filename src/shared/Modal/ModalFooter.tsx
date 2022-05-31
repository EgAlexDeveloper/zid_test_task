import React, { FC, HTMLAttributes } from 'react';
interface PropsTypes extends HTMLAttributes<HTMLTableRowElement> { }

type props = PropsTypes;

const ModalFooter: FC<props> = (props: props) => {
    return (
        <div className="modal-footer">
            {props.children}
        </div>
    )
}

export default ModalFooter;