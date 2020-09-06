import React, { Component } from 'react';
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

class CreateCarContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newCar: {
                vehicleType: 'Car',
                make: '',
                model: '',
                engine: '',
                doors: '',
                wheels: '',
                bodyType: ''
            },
            displaySuccess: false,
            displayError: false,
            errorMessage: '',
            bodyTypeOptions: ['Convertible', 'Coupe', 'Hatchback', 'Sedan', 'SUV', 'Ute', 'Van', 'Wagon']
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    handleInput(evt) {
        let value = evt.target.value;
        let name = evt.target.name;

        this.setState( prevState => ({
            newCar: {
                ...prevState.newCar,
                [name]: value
            }
        }), () => console.log(this.state.newCar)
        )
    }

    handleFormSubmit(evt) {
        evt.preventDefault();
        let newCarData = this.state.newCar;
        let invalidFields = [];

        if (newCarData.make === '')
            invalidFields.push(' Make')

        if (newCarData.model === '')
            invalidFields.push(' Model')

        if (newCarData.engine === '')
            invalidFields.push(' Engine')

        if (newCarData.doors === '')
            invalidFields.push(' Doors')

        if (newCarData.wheels === '')
            invalidFields.push(' Wheels')

        if (newCarData.bodyType === '')
            invalidFields.push(' Body Type')

        console.log(newCarData)

        if (invalidFields.length > 0)
        {
            this.setState({
                displayError: true,
                errorMessage: 'The following field(s) ' + invalidFields.toString() + 'are required'
            });
            return;
        }

        fetch('api/Cars', {
            method: 'POST',
            body: JSON.stringify(newCarData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (!response.ok) {
                this.setState({
                    displayError: true,
                    errorMessage: 'An error has occured',
                    displaySuccess: false
                });
            }
            return response;
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    console.log("Successful" + data);
                    this.setState({
                        displaySuccess: true,
                        displayError: false,
                        errorMessage: ''
                    });
                });
            }
        }).catch(response => {
            this.setState({
                displayError: true,
                errorMessage: 'An error has occured',
                displaySuccess: false
            });
        });
    }

    handleClearForm(evt) {
        evt.preventDefault();
        this.setState({
            newCar: {
                vehicleType: 'Car',
                make: '',
                model: '',
                engine: '',
                doors: '',
                wheels: '',
                bodyType: ''
            },
            displayError: false,
            displaySuccess: false
        })
    }

    render() {
        return (
            <center>
                <form onSubmit={this.handleFormSubmit}>
                    <br/>
                <h2>Car Details:</h2>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <Input inputType={"text"} title={"Make"} name={"make"} value={this.state.newCar.make} placeholder={"Enter the Car Manufacturer"} handleChange={this.handleInput} required={"required"} /> {" "}
                        </div>
                        <div class="form-group">
                            <Input inputType={"text"} title={"Model"} name={"model"} value={this.state.newCar.model} placeholder={"Enter the Car Model"} handleChange={this.handleInput} required={"required"} /> {" "}
                        </div>
                        <div class="form-group">
                            <Input inputType={"text"} title={"Engine"} name={"engine"} value={this.state.newCar.engine} placeholder={"Enter the engine type"} handleChange={this.handleInput} required={"required"} /> {" "}
                        </div>
                    </div>
                    <div class="col-md-6">
                            <div class="form-group">
                                <Input inputType={"number"} title={"Doors"} name={"doors"} value={this.state.newCar.doors} placeholder={"Enter the number of doors"} handleChange={this.handleInput} required={"required"} /> {" "}
                            </div>
                            <div class="form-group">
                                <Input inputType={"number"} title={"Wheels"} name={"wheels"} value={this.state.newCar.wheels} placeholder={"Enter the number of wheels"} handleChange={this.handleInput} required={"required"} /> {" "}
                            </div>
                            <div class="form-group">
                                <Select title={'Select Body Type'} name={'bodyType'} options={this.state.bodyTypeOptions} value={this.state.bodyType} placeholder={'Select Body Type'} handleChange={this.handleInput} /> {" "}
                            </div>
                    </div>
                </div>
                    <br/>
                <div class="button-container">
                    <Button action={this.handleFormSubmit} type={"primary"} title={"Submit"}/>{" "}
                    {/*Submit*/}
                    <Button action={this.handleClearForm} type={"secondary"} title={"Clear"} />{" "}
                </div>
                <br/>
                {(this.state.displaySuccess) ?
                    <div className="alert alert-success" role="alert">
                        <p>Car Created Successfully</p>
                    </div> : ''}

                {(this.state.displayError) ?
                    <div className="alert alert-danger" role="alert">
                        <p>{this.state.errorMessage}</p>
                            </div> : ''}
            </form>
            </center>
        )
    }
}

export default CreateCarContainer;