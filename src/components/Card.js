
const Card = ({ data }) => {

    const id = data.id;
    const name = data.name;
    const img = data.img;

    return (
        <div className="card" idValue={id} onclick={null}>
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