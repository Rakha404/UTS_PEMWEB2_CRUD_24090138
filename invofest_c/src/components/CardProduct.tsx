interface cardProducts {
    foto : string;
    name : string;
    description : string;
    price : number;
}

const CardProducts : React.FC<cardProducts> = ({foto, name, description, price}) => {
    return (
        <div>
            <img src={foto}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </div>  
    );
};
export default CardProducts;