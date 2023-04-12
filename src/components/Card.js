
const Card = ({ data, cb }) => {

    const id = data.id;
    const name = data.name;
    const img = data.img;
    const callBack = cb;

    return (
        <div className="card" onClick={(e) => { callBack(e, id)}} >
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Card;