import React from "react";
import CardPo from "./CardPo";

const CardKFP = ({theGoat}) => {
    return(
        <CardPo
            imgSrc={theGoat.imgSrc}
            name={theGoat.name}
            description={theGoat.description}
        />
    )
}

export default CardKFP;