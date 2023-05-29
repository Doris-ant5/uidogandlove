import React from "react";

const Dog = ({ dog }) => {

    return (

        <tr onClick={()=>{window.location.href=`/dog/${dog.id}`}} >
            <td>{dog.id}</td>
            <td>{dog.identifierTag}</td>
            <td>{dog.name}</td>
            <td>{dog.sex}</td>
            <td>{dog.dateRegistration}</td>
            <td>{dog.size}</td>
            <td>{dog.castration ? "TRUE" : "FALSE"}</td>
            <td>{dog.vax ? "TRUE" : "FALSE"}</td>
            <td>{dog.chip ? "TRUE" : "FALSE"}</td>
            <td>{dog.description}</td>
            {/*<td>{dog.images}</td>*/}
            <td>{dog.birthDate}</td>
            <td>{dog.raceDog.join(", ")}</td>
            <td>{dog.healthDog.join(", ")}</td>
            <td>{dog.personalitiesDog.join(", ")}</td>
            <td>{dog.needmentsDog.join(", ")}</td>
        </tr>
    );
};

export default Dog;