import axios from "axios";
import React, { Component } from 'react';
import ImageUploadForm from "./ImageUploadForm";

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
        animalImages: [],
        birthDate: "",
        raceDog: "",
        healthDog: "",
        personalitiesDog: "",
        needmentsDog: "",

        errors: {},
        successMessage: "" // Dodany stan dla komunikatu o sukcesie
    }

    onHandleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onCastrationChange = (e) => {
        const value = e.target.value === "true";
        this.setState({ castration: value });
    }

    onVaxChange = (e) => {
        const value = e.target.value === "true";
        this.setState({ vax: value });
    }

    onChipChange = (e) => {
        const value = e.target.value === "true";
        this.setState({ chip: value });
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


        const {

            identifierTag, name, sex, dateRegistration, size, castration, vax, chip,
            description, animalImages, birthDate, raceDog, healthDog, personalitiesDog,
            needmentsDog

        } = this.state


        var isValid = true;

        //validation
        if (identifierTag === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    identifierTag: '*Tag is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (name === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    name: '*Name is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }


      if (sex === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    sex: '*Sex is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

       if (dateRegistration === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    dateRegistration: '*Date registration is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (size === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    size: '*Size is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (castration === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    castration: '*Castration is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (vax === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    vax: '*Vax is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (chip === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    chip: '*Chip is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (description === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    description: '*Description is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (birthDate === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    birthDate: '*Birth day is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (raceDog === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    raceDog: '*Race/s is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (healthDog === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    healthDog: '*Health is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (personalitiesDog === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    personalitiesDog: '*Personalities is required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }

        if (needmentsDog === "") {
            this.setState(prevState => ({
                errors: {                   // object that we want to update
                    ...prevState.errors,    // keep all other key-value pairs
                    needmentsDog: '*Needment/s are required.'       // update the value of specific key
                }
            }))
            isValid = false;
        }


        if (!isValid) {
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

            .then(() => {
                // Zresetuj formularz i wyświetl komunikat o sukcesie

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

            errors: {},
            successMessage: "Piesek został pomyślnie dodany do bazy danych!"

        });
            })
            .catch(error => {
                console.error(error);
                // Obsługa błędu, np. wyświetlenie komunikatu o niepowodzeniu
            });
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
            showNeedmentsDogList,
            successMessage


        } = this.state


        return (
            <div className='card'>
                <div className='card-header bg-info border border-info'>
                    <h2>Please fill out the new dog registration form</h2>
                </div>
                <div className='card-body'>

                    <form onSubmit={this.onHandleSubmit} action="#">
                        <div>
                            <label>Identifier tag:</label>
                            <input
                                type="text"
                                name="identifierTag"
                                value={identifierTag}
                                onChange={this.onHandleChange}
                                />
                            <div className="errorRequired">{errors.identifierTag}</div>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.onHandleChange}
                            />
                            <div className="errorRequired">{errors.name}</div>
                        </div>
                            <div>
                                <label>Sex:</label>
                                <select
                                    name="sex"
                                    value={sex}
                                    onChange={this.onHandleChange}
                                >
                                    <option value="">Select option</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                </select>
                                <div className="errorRequired">{errors.sex}</div>
                            </div>
                            <div>
                                <label>Date registration:</label>
                                <input
                                    type="date"
                                    name="dateRegistration"
                                    value={dateRegistration}
                                    onChange={this.onHandleChange}

                                />
                                <div className="errorRequired">{errors.dateRegistration}</div>
                            </div>
                            <div>
                                <label>Size:</label>
                                <select
                                    name="size"
                                    value={size}
                                    onChange={this.onHandleChange}
                                >
                                    <option value="">Select option</option>
                                    <option value="SMALL">Small</option>
                                    <option value="MEDIUM">Medium</option>
                                    <option value="LARGE">Large</option>
                                </select>
                                <div className="errorRequired">{errors.size}</div>
                            </div>
                            <div>
                                <label>Castration:</label>
                                <select
                                    name="castration"
                                    value={castration.toString()}
                                    onChange={this.onCastrationChange}
                                    error={errors.castration}
                                >
                                    <option value="">Select option</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                                <div className="errorRequired">{errors.castration}</div>
                            </div>
                            <div>
                                <label>Vax:</label>
                                <select
                                    name="vax"
                                    value={vax.toString()}
                                    onChange={this.onVaxChange}
                                >
                                    <option value="">Select option</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                                <div className="errorRequired">{errors.vax}</div>
                            </div>
                            <div>
                                <label>Chip:</label>
                                <select
                                    name="chip"
                                    value={chip.toString()}
                                    onChange={this.onChipChange}
                                    error={errors.chip}
                                >
                                    <option value="">Select option</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                                <div className="errorRequired">{errors.chip}</div>
                            </div>
                            <div>
                                <label>Description:</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={description}
                                    onChange={this.onHandleChange}
                                />
                                <div className="errorRequired">{errors.description}</div>
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
                                <div className="errorRequired">{errors.birthDate}</div>
                            </div>
                            <div className="checkbox-container">
                                <div>
                                    <label>Race dog:</label>
                                    <div>
                                        <div className="errorRequired">{errors.raceDog}</div>
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
                                    <div className="errorRequired">{errors.healthDog}</div>
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
                                    <div className="errorRequired">{errors.personalitiesDog}</div>
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
                                    <div className="errorRequired">{errors.needmentsDog}</div>
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
                            </div>

                        </div>






                        <ImageUploadForm />
                        <button type="submit" className="register"  >
                            Add new dog
                        </button>
                        <div className="messageSuccess">
                        {successMessage && <div className="successMessage">{successMessage}</div>}
                        </div>
                    </form>





                </div>
            </div>

        )
    }



}
export default AddDog