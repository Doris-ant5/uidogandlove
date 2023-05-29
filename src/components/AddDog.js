import axios from "axios";
import React, { Component } from 'react';

class AddDog extends Component {
    state = {
        identifierTag: "",
        name: "",
        sex: "",
        dateRegistration: "",
        size: "",
        castration: "",
        vax: "",
        chip: "",
        description: "",
        animalImages: "",
        birthDate: "",
        raceDog: "",
        healthDog: "",
        personalitiesDog: "",
        needmentsDog: "",

        errors: {}
    }

    onHandleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    onHandleRaceDogChange = (e) => {
        const { value, checked } = e.target;
        const { raceDog } = this.state;

        if (checked) {
            // Dodaj wartość do tablicy, jeśli jest zaznaczona
            this.setState({ raceDog: [...raceDog, value] });
        } else {
            // Usuń wartość z tablicy, jeśli nie jest zaznaczona
            this.setState({ raceDog: raceDog.filter((race) => race !== value) });
        }
    }

    onHandleHealthDogChange = (e) => {
        const { value, checked } = e.target;
        const { healthDog } = this.state;

        if (checked) {
            // Dodaj wartość do tablicy, jeśli jest zaznaczona
            this.setState({ healthDog: [...healthDog, value] });
        } else {
            // Usuń wartość z tablicy, jeśli nie jest zaznaczona
            this.setState({ healthDog: healthDog.filter((health) => health !== value) });
        }
    }

    onHandlePersonalitiesDogChange = (e) => {
        const { value, checked } = e.target;
        const { personalitiesDog } = this.state;

        if (checked) {
            // Dodaj wartość do tablicy, jeśli jest zaznaczona
            this.setState({ personalitiesDog: [...personalitiesDog, value] });
        } else {
            // Usuń wartość z tablicy, jeśli nie jest zaznaczona
            this.setState({ personalitiesDog: personalitiesDog.filter((personalities) => personalities !== value) });
        }
    }


    onHandleNeedmentsDogChange = (e) => {
        const { value, checked } = e.target;
        const { needmentsDog } = this.state;

        if (checked) {
            // Dodaj wartość do tablicy, jeśli jest zaznaczona
            this.setState({ needmentsDog: [...needmentsDog, value] });
        } else {
            // Usuń wartość z tablicy, jeśli nie jest zaznaczona
            this.setState({ needmentsDog: needmentsDog.filter((needments) => needments !== value) });
        }
    }

    toggleRaceDogList = () => {
        this.setState((prevState) => ({
            showRaceDogList: !prevState.showRaceDogList
        }));
    };


    toggleHealthDogList = () => {
        this.setState((prevState) => ({
            showHealthDogList: !prevState.showHealthDogList
        }));
    };

    togglePersonalitiesDogList = () => {
        this.setState((prevState) => ({
            showPersonalitiesDogList: !prevState.showPersonalitiesDogList
        }));
    };

    toggleNeedmentsDogList = () => {
        this.setState((prevState) => ({
            showNeedmentsDogList: !prevState.showNeedmentsDogList
        }));
    };

    onHandleSubmit = (e) => {
        e.preventDefault()
        const { identifierTag, name, sex, dateRegistration, size, castration, vax, chip,
            description, animalImages, birthDate, raceDog, healthDog, personalitiesDog,
            needmentsDog



        } = this.state




        //validation
        if (identifierTag === "") {
            this.setState({ errors: { name: "*Name is required." } })
            return;
        }

        if (name === "") {
            this.setState({ errors: { email: "*Email is required." } })
            return;
        }

        if (sex === "") {
            this.setState({ errors: { phone: "*Phone is required." } })
            return;
        }

        if (dateRegistration === "") {
            this.setState({ errors: { phone: "*Phone is required." } })
            return;
        }

        if (size === "") {
            this.setState({ errors: { phone: "*Phone is required." } })
            return;
        }



        const newDog = {

            identifierTag: identifierTag,
            name: name,
            sex: sex,
            dateRegistration: dateRegistration,
            size: size,
            castration: castration,
            vax: vax,
            chip: chip,
            description: description,
            animalImages: animalImages,
            birthDate: birthDate,
            raceDog: raceDog,
            healthDog: healthDog,
            personalitiesDog: personalitiesDog,
            needmentsDog: needmentsDog

        }

        // send new to the backend
        axios.post("http://localhost:8077/api/v1/dogs", newDog)

            .then(response => {
                // Obsługa sukcesu - wykonuje się, gdy backend zwróci odpowiedź sukcesu (status 2xx)
                console.log(response.data); // Wyświetl dane zwrócone przez backend
                // Dodatkowe operacje, które chcesz wykonać po sukcesie, np. zaktualizowanie stanu komponentu, wyświetlenie komunikatu, itp.
            })
            .catch(error => {
                // Obsługa błędu - wykonuje się, gdy wystąpi błąd w zapytaniu lub backend zwróci błąd (status inny niż 2xx)
                console.log(error.response); // Wyświetl obiekt błędu zwrócony przez backend lub informacje o błędzie związane z zapytaniem
            });

        this.setState({
            identifierTag: "",
            name: "",
            sex: "",
            dateRegistration: "",
            size: "",
            castration: "",
            vax: "",
            chip: "",
            description: "",
            animalImages: "",
            birthDate: "",
            raceDog: "",
            healthDog: "",
            personalitiesDog: "",
            needmentsDog: "",

            errors: {}

        })
    }



    render() {
        const {
            identifierTag,
            name,
            sex,
            dateRegistration,
            size,
            castration,
            vax,
            chip,
            description,
            animalImages,
            birthDate,
            raceDog,
            healthDog,
            personalitiesDog,
            needmentsDog,

            errors,
            showRaceDogList,
            showHealthDogList,
            showPersonalitiesDogList,
            showNeedmentsDogList


        } = this.state


        return (
            <div className='card'>
                <div className='card-header bg-info border border-info'>
                    <h2>Please fill out the new dog registration form</h2>
                </div>
                <div className='card-body'>
                    <form onSubmit={this.onHandleSubmit}>
                        <div>
                            <label>Identifier tag:</label>
                            <input
                                type="text"
                                name="identifierTag"
                                value={identifierTag}
                                onChange={this.onHandleChange}
                                error={errors.identifierTag}
                                />

                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.onHandleChange}
                                error={errors.name}
                            />
                        </div>
                            <div>
                                <label>Sex:</label>
                                <select
                                    name="sex"
                                    value={sex}
                                    onChange={this.onHandleChange}
                                    error={errors.sex}
                                >
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                </select>
                            </div>
                            {/*<div>
                                <label>Date registration:</label>
                                <input
                                    type="date"
                                    name="dateRegistration"
                                    value={dateRegistration}
                                    onChange={this.onHandleChange}
                                    error={errors.dateRegistration}
                                />
                            </div>
                            <div>
                                <label>Size:</label>
                                <select
                                    name="size"
                                    value={size}
                                    onChange={this.onHandleChange}
                                    error={errors.size}
                                >
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select>
                            </div>
                            <div>
                                <label>Castration:</label>
                                <select
                                    name="castration"
                                    value={castration}
                                    onChange={this.onHandleChange}
                                    error={errors.castration}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div>
                                <label>Vax:</label>
                                <select
                                    name="vax"
                                    value={vax}
                                    onChange={this.onHandleChange}
                                    error={errors.vax}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div>
                                <label>Chip:</label>
                                <select
                                    name="chip"
                                    value={chip}
                                    onChange={this.onHandleChange}
                                    error={errors.chip}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div>
                                <label>Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={this.onHandleChange}
                                    error={errors.description}
                                />
                            </div>
                            <div>
                                <label>Add images:</label>
                                <input
                                    type="file"
                                    name="animalImages"
                                    value={animalImages}
                                    accept="image/*"
                                    onChange={this.onHandleChange}
                                    error={errors.animalImages}
                                    placeholder="Select a file"
                                />
                            </div>
                            <div>
                                <label>Birth Date:</label>
                                <input
                                    type="date"
                                    name="birthDate"
                                    value={birthDate}
                                    onChange={this.onHandleChange}
                                    error={errors.birthDate}
                                />
                            </div>
                            <div className="checkbox-container">
                                <div>
                                    <label>Race dog:</label>
                                    <div>
                                        <button className="select" type="button" onClick={this.toggleRaceDogList}>
                                            Select race
                                        </button>
                                    </div>
                                    {showRaceDogList && (
                                        <div>
                                            <div>
                                                <label className="elementLabel">
                                                <input
                                                    type="checkbox"
                                                    name="raceDog"
                                                    value="AKITA"
                                                    checked={raceDog.includes('AKITA')}
                                                    onChange={this.onHandleRaceDogChange}
                                                />
                                                AKITA
                                            </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                <input
                                                    type="checkbox"
                                                    name="raceDog"
                                                    value="ALASKAN_MALAMUTE"
                                                    checked={raceDog.includes('ALASKAN_MALAMUTE')}
                                                    onChange={this.onHandleRaceDogChange}
                                                />
                                                ALASKAN MALAMUTE
                                            </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                <input
                                                    type="checkbox"
                                                    name="raceDog"
                                                    value="BASSET"
                                                    checked={raceDog.includes('BASSET')}
                                                    onChange={this.onHandleRaceDogChange}
                                                />
                                                BASSET
                                            </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="BERNARDIN"
                                                        checked={raceDog.includes('BERNARDIN')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    BERNARDIN
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="BOXER"
                                                        checked={raceDog.includes('BOXER')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    BOXER
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="BULLDOG_ENGLISH"
                                                        checked={raceDog.includes('BULLDOG_ENGLISH')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    BULLDOG_ENGLISH
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="BULLDOG_FRENCH"
                                                        checked={raceDog.includes('BULLDOG_FRENCH')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    BULLDOG_FRENCH
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="BULTERIER"
                                                        checked={raceDog.includes('BULTERIER')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    BULTERIER
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="CHART"
                                                        checked={raceDog.includes('CHART')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    CHART
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="COCKER_SPANIEL"
                                                        checked={raceDog.includes('COCKER_SPANIEL')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    COCKER_SPANIEL
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="GONCZY_POLSKI"
                                                        checked={raceDog.includes('GONCZY_POLSKI')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    GONCZY_POLSKI
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="DACHSHUND"
                                                        checked={raceDog.includes('DACHSHUND')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    DACHSHUND
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="LABRADOR"
                                                        checked={raceDog.includes('LABRADOR')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    LABRADOR
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                <input
                                                    type="checkbox"
                                                    name="raceDog"
                                                    value="MASTIF"
                                                    checked={raceDog.includes('MASTIF')}
                                                    onChange={this.onHandleRaceDogChange}
                                                />
                                                MASTIF
                                            </label>
                                        </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="GERMAN_SHEPHERD"
                                                        checked={raceDog.includes('GERMAN_SHEPHERD')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    GERMAN_SHEPHERD
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="PEKINCZYK"
                                                        checked={raceDog.includes('PEKINCZYK')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    PEKINCZYK
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="PINCHER"
                                                        checked={raceDog.includes('PINCHER')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    PINCHER
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="ROTWAILER"
                                                        checked={raceDog.includes('ROTWAILER')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    ROTWAILER
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="raceDog"
                                                        value="SNAUCER"
                                                        checked={raceDog.includes('SNAUCER')}
                                                        onChange={this.onHandleRaceDogChange}
                                                    />
                                                    SNAUCER
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>


                            <div className="checkbox-container">
                                <div>
                                    <label>Health dog:</label>
                                    <div>
                                        <button className="select" type="button" onClick={this.toggleHealthDogList}>
                                            Select health
                                        </button>
                                    </div>
                                    {showHealthDogList && (
                                        <div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="healthDog"
                                                        value="ALERGIES"
                                                        checked={healthDog.includes('ALERGIES')}
                                                        onChange={this.onHandleHealthDogChange}
                                                    />
                                                    ALERGIES
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="healthDog"
                                                        value="FOODINTOLERANCES"
                                                        checked={healthDog.includes('FOODINTOLERANCES')}
                                                        onChange={this.onHandleHealthDogChange}
                                                    />
                                                    FOODINTOLERANCES
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="healthDog"
                                                        value="SENSITIVESTOMACH"
                                                        checked={healthDog.includes('SENSITIVESTOMACH')}
                                                        onChange={this.onHandleHealthDogChange}
                                                    />
                                                    SENSITIVESTOMACH
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="healthDog"
                                                        value="DISEASE"
                                                        checked={healthDog.includes('DISEASE')}
                                                        onChange={this.onHandleHealthDogChange}
                                                    />
                                                    DISEASE
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="healthDog"
                                                        value="JOINTDYSPLASIA"
                                                        checked={healthDog.includes('JOINTDYSPLASIA')}
                                                        onChange={this.onHandleHealthDogChange}
                                                    />
                                                    JOINTDYSPLASIA
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>



                            <div className="checkbox-container">
                                <div>
                                    <label>Personalities dog:</label>
                                    <div>
                                        <button className="select" type="button" onClick={this.togglePersonalitiesDogList}>
                                            Select personalities
                                        </button>
                                    </div>
                                    {showPersonalitiesDogList && (
                                        <div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="ENERGY"
                                                        checked={personalitiesDog.includes('ENERGY')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    ENERGY
                                                </label>
                                            </div>


                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="CAREFUL"
                                                        checked={personalitiesDog.includes('CAREFUL')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    CAREFUL
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="CALM"
                                                        checked={personalitiesDog.includes('CALM')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    CALM
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="UN_SMARTY"
                                                        checked={personalitiesDog.includes('UN_SMARTY')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    UN_SMARTY
                                                </label>
                                            </div>


                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="STRONG"
                                                        checked={personalitiesDog.includes('STRONG')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    STRONG
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="FEARFUL"
                                                        checked={personalitiesDog.includes('FEARFUL')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    FEARFUL
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="DO_NOT_LIKE_CHILDREN"
                                                        checked={personalitiesDog.includes('DO_NOT_LIKE_CHILDREN')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    DO_NOT_LIKE_CHILDREN
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="LOVING_CHILDREN"
                                                        checked={personalitiesDog.includes('LOVING_CHILDREN')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    LOVING_CHILDREN
                                                </label>
                                            </div>


                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="ADORABLE"
                                                        checked={personalitiesDog.includes('ADORABLE')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    ADORABLE
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="ACCEPTING_OTHER_ANIMALS"
                                                        checked={personalitiesDog.includes('ACCEPTING_OTHER_ANIMALS')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    ACCEPTING_OTHER_ANIMALS
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="DISTRUSTFUL_OF_STRANGERS"
                                                        checked={personalitiesDog.includes('DISTRUSTFUL_OF_STRANGERS')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    DISTRUSTFUL_OF_STRANGERS
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="POSITIVE"
                                                        checked={personalitiesDog.includes('POSITIVE')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    POSITIVE
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="AGGRESSIVE_TO_DOGS"
                                                        checked={personalitiesDog.includes('AGGRESSIVE_TO_DOGS')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    AGGRESSIVE_TO_DOGS
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="RECEIVED"
                                                        checked={personalitiesDog.includes('RECEIVED')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    RECEIVED
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="LOVING"
                                                        checked={personalitiesDog.includes('LOVING')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    LOVING
                                                </label>
                                            </div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="SMART"
                                                        checked={personalitiesDog.includes('SMART')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    SMART
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="INTELLIGENT"
                                                        checked={personalitiesDog.includes('INTELLIGENT')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    INTELLIGENT
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="WISE"
                                                        checked={personalitiesDog.includes('WISE')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    WISE
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="personalitiesDog"
                                                        value="LEARNS_QUICKLY"
                                                        checked={personalitiesDog.includes('LEARNS_QUICKLY')}
                                                        onChange={this.onHandlePersonalitiesDogChange}
                                                    />
                                                    LEARNS_QUICKLY
                                                </label>
                                            </div>




                                        </div>
                                    )}
                                </div>
                            </div>




                            <div className="checkbox-container">
                                <div>
                                    <label>Needments dog:</label>
                                    <div>
                                        <button className="select" type="button" onClick={this.toggleNeedmentsDogList}>
                                            Select needments
                                        </button>
                                    </div>
                                    {showNeedmentsDogList && (
                                        <div>
                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="HOUSE_WITH_GARDEN"
                                                        checked={needmentsDog.includes('HOUSE_WITH_GARDEN')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    HOUSE_WITH_GARDEN
                                                </label>
                                            </div>


                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="PHYSIOTHERAPY"
                                                        checked={needmentsDog.includes('PHYSIOTHERAPY')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    PHYSIOTHERAPY
                                                </label>
                                            </div>


                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="BEHAVIORIST"
                                                        checked={needmentsDog.includes('BEHAVIORIST')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    BEHAVIORIST
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="LOTS_OF_ACTIVITY"
                                                        checked={needmentsDog.includes('LOTS_OF_ACTIVITY')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    LOTS_OF_ACTIVITY
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="LITTLE_ACTIVITY"
                                                        checked={needmentsDog.includes('LITTLE_ACTIVITY')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    LITTLE_ACTIVITY
                                                </label>
                                            </div>


                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="SPECIAL_FOOD"
                                                        checked={needmentsDog.includes('SPECIAL_FOOD')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    SPECIAL_FOOD
                                                </label>
                                            </div>


                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="GOOD_FOR_ELDERLY_PEOPLE"
                                                        checked={needmentsDog.includes('GOOD_FOR_ELDERLY_PEOPLE')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    GOOD_FOR_ELDERLY_PEOPLE
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="RECOMMENDED_FOR_CHILDREN"
                                                        checked={needmentsDog.includes('RECOMMENDED_FOR_CHILDREN')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    RECOMMENDED_FOR_CHILDREN
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="NEED_MEDICINE_DOSAGE"
                                                        checked={needmentsDog.includes('NEED_MEDICINE_DOSAGE')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    NEED_MEDICINE_DOSAGE
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="FOR_EXPERIENCED_OWNER"
                                                        checked={needmentsDog.includes('FOR_EXPERIENCED_OWNER')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    FOR_EXPERIENCED_OWNER
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="FOR_BEGINNER_OWNERS"
                                                        checked={needmentsDog.includes('FOR_BEGINNER_OWNERS')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    FOR_BEGINNER_OWNERS
                                                </label>
                                            </div>

                                            <div>
                                                <label className="elementLabel">
                                                    <input
                                                        type="checkbox"
                                                        name="needmentsDog"
                                                        value="FOR_SMALL_FLATS "
                                                        checked={needmentsDog.includes('FOR_SMALL_FLATS ')}
                                                        onChange={this.onHandleNeedmentsDogChange}
                                                    />
                                                    FOR_SMALL_FLATS
                                                </label>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>*/}

                        </div>

                        <button type="submit" className="register"  >
                            Add new dog
                        </button>
                    </form>
                </div>
            </div>

        )
    }
}
export default AddDog