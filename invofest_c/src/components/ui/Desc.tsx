interface DescProps {
    foto : string;
    name : string;
    description : string;
}

const DescProps : React.FC<DescProps> = ({foto, name, description}) => {
    return (
        <div>
            <img src={foto}/>
            <h3 className="font-semibold text-4xl text-red-800">{name}</h3>
            <p>{description}</p>
        </div>  
    );
};
export default DescProps;