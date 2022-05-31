import React, { FC, HTMLAttributes } from 'react';

interface props extends HTMLAttributes<HTMLTableRowElement> {
    className: string
}

const ModalBody: FC<props> = (props: props) => {
    return (
        <div className={'modal-body ' + props.className}>
            {props.children}
        </div>
    )
}

export default ModalBody;