interface imageProps{
    imageUrl: string;
}

const Image: React.FC<imageProps> = ({imageUrl}) => {
    return <img src={imageUrl}/>;
}; 

export default Image;