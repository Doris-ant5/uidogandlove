const DogImage = ({ imageData }) => {

    return (
        <div>
            <img
                src={"http://localhost:8077/api/v1/animalImages/getAsImage/" + imageData.id}
                alt={imageData.name}
            />
        </div>
    );
};

export default DogImage;