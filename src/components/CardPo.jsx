
function CardPo({ imgSrc, name, type, description, poKFP}) {
    
    
    return (
        <div className="container">
            <div className="container-header">
                <div className="imgContainer">
                    <img src={imgSrc} alt={type} />
                </div>
            </div>
            <div className="container-body">
                <h2 className="culte">{name}</h2>
                <p className="card-description">{description}</p>
            </div>


        </div>
    )
}

export default CardPo;