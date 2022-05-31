import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string
};

const CardBody: FC<Props> = (props: Props) => {
    return <>
        <div className={props.class ?? 'card-body'}>
            {props.children}
        </div>
    </>
};

export default CardBody;