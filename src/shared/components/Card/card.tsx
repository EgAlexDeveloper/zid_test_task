import React, { FC, HTMLAttributes } from "react";
import './card.scss'

interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string
};

const Card: FC<Props> = (props: Props) => {
    return <>
        <div className={'card ' + props.class}>
            {props.children}
        </div>
    </>
};

export default Card;