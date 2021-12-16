
const Item = ({img, name, description,stock}) => {
    return (
        <div>
            <img src={img} alt={name}/>
            <p>Stock: {stock}</p>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    )
}

export default Item;