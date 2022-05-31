import React, { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    class?: string
};

const CardHeader: FC<Props> = (props: Props) => {
    return <>
        <div className={'card-header ' + props.class}>
            {props.children}
        </div>
    </>
};

export default CardHeader;