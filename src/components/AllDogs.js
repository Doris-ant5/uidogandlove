import React, { useState, useEffect } from "react";
import axios from "axios";
import Dog from "./Dog";

const AllDogs = ({ brand }) => {

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8077/api/v1/dogs")
            .then((response) => {
                setDogs(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    return (
        <div>
            <h1>All Dogs</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Identifier tag</th>
                    <th>Name</th>
                    <th>Sex</th>
                    <th>Date registration</th>
                    <th>Size</th>
                    <th>Castration</th>
                    <th>Vax</th>
                    <th>Chip</th>
                    <th>Description</th>
                    <th>Images</th>
                    <th>Birth date</th>
                    <th>Races</th>
                    <th>Health</th>
                    <th>Personalities</th>
                    <th>Needments</th>
                </tr>
                </thead>
                <tbody>
                {dogs.map((dog) => (

                    <Dog key={dog.id} dog={dog} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllDogs;