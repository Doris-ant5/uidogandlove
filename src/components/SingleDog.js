import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleDog = () => {
    const {id} = useParams();
    const [dog, setDog] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8077/api/v1/dogs/${id}`)
            .then((response) => {
                setDog(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div>
            <h1>Single Dog</h1>
            <p>Id: {dog.id}</p>
            <p>Name: {dog.name}</p>
            <p>Sex: {dog.sex}</p>
            <p>Date registration: {dog.dateRegistration}</p>
            <p>Size: {dog.size}</p>
            <p>Castration: {dog.castration ? "TRUE" : "FALSE"}</p>
            <p>Vax: {dog.vax ? "TRUE" : "FALSE"}</p>


        </div>
    );

};

            export default SingleDog;