import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import DogImage from "./DogImage";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SingleDog = () => {
    const params = useParams();
    const [dog, setDog] = useState([]);

    useEffect(() => {
       axios.get(`http://localhost:8077/api/v1/dogs/${params.dogid}`)
            .then((response) => {
                setDog(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [params.dogid]);

    return (
        <div>
            <h2>View of single Dog</h2>
            <table>
                <tbody>
                <tr>
                    <td className="highlight">Id:</td>
                    <td className="pointer">{dog.id}</td>
                </tr>
                <tr>
                    <td className="highlight">Identifier tag:</td>
                    <td className="pointer">{dog.identifierTag}</td>
                </tr>
                <tr>
                    <td className="highlight">Name:</td>
                    <td className="pointer">{dog.name}</td>
                </tr>
                <tr>
                    <td className="highlight">Sex:</td>
                    <td className="pointer">{dog.sex}</td>
                </tr>
                <tr>
                    <td className="highlight">Date registration:</td>
                    <td className="pointer">{dog.dateRegistration}</td>
                </tr>
                <tr>
                    <td className="highlight">Size:</td>
                    <td className="pointer">{dog.size}</td>
                </tr>
                <tr>
                    <td className="highlight">Castration:</td>
                    <td className="pointer">{dog.castration ? "TRUE" : "FALSE"}</td>
                </tr>
                <tr>
                    <td className="highlight">Vax:</td>
                    <td className="pointer">{dog.vax ? "TRUE" : "FALSE"}</td>
                </tr>
                <tr>
                    <td className="highlight">Chip:</td>
                    <td className="pointer">{dog.chip ? "TRUE" : "FALSE"}</td>
                </tr>
                <tr>
                    <td className="highlight">Description:</td>
                    <td className="pointer">{dog.description}</td>
                </tr>
            {/*    <tr>
                    <td className="highlight">Images:</td>
                    <td className="pointer">{dog.images}</td>
                </tr>*/}
                <tr>
                    <td className="highlight">Birth date:</td>
                    <td className="pointer">{dog.birthDate}</td>
                </tr>
                <tr>
                    <td className="highlight">Races:</td>
                    <td className="pointer">{dog.raceDog ? dog.raceDog.join(", ") : ""}</td>
                </tr>
                <tr>
                    <td className="highlight">Health:</td>
                    <td className="pointer">{dog.healthDog ? dog.healthDog.join(", ") : ""}</td>
                </tr>
                <tr>
                    <td className="highlight">Personalities:</td>
                    <td className="pointer">{dog.personalitiesDog ? dog.personalitiesDog.join(", ") : ""}</td>
                </tr>
                <tr>
                    <td className="highlight">Needments:</td>
                    <td className="pointer">{dog.needmentsDog ? dog.needmentsDog.join(", ") : ""}</td>
                </tr>
                </tbody>
            </table>





            <div className="single-dog-container">
                <h2>Photos</h2>
                {dog.animalImages && (
                    <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        className="dog-carousel" // Dodanie klasy CSS do karuzeli
                    >
                        {dog.animalImages.map((image) => (
                            <DogImage key={image.id} imageData={image} />

                        ))}

                    </Carousel>
                )}
            </div>






        </div>

    );
};

export default SingleDog;