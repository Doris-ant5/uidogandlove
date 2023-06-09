import React, { Component } from 'react';

class ImageUploadForm extends Component {
    state = {
        animalImages: [] // Początkowa wartość pustej tablicy
    };

    onAnimalImagesChange = (e) => {
        const files = Array.from(e.target.files);
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                animalImages: reader.result ? [reader.result] : [] // Zapisuje tylko jedno zdjęcie jako tablicę
            });
        };

        if (files[0]) {
            reader.readAsDataURL(files[0]);
        } else {
            this.setState({ animalImages: [] });
        }
    }

    render() {
        const { animalImages } = this.state;

        return (
            <div>
                <h2>And the last step: add pics of pet! </h2>
                <input type="file" multiple onChange={this.onAnimalImagesChange} />
                {animalImages.length > 0 && (
                    <div>
                        <h4>Przesłane zdjęcia:</h4>
                        <ul>
                            {animalImages.map((image, index) => (
                                <li key={index}>
                                    <img src={image} alt={`Zdjęcie ${index}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default ImageUploadForm;