import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string
};

const CardFooter: FC<Props> = (props: Props) => {
    return <>
        <div className={props.class ?? 'card-footer'}>
            {props.children}
        </div>
    </>
};

export default CardFooter;