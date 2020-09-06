import React, { Component } from 'react';
import Select from "../components/Select";
import Button from "../components/Button";
import CreateCarContainer from "../containers/CreateCarContainer";
import CreateTruckContainer from "../containers/CreateTruckContainer";

class VehicleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleType: '',
            vehicleOptions: ['Car', 'Truck'],
            displayForm: false
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.CreateForm = null;
    }

    handleButtonClick(evt) {
        switch (this.state.vehicleType) {
            case "Car":
                this.CreateForm = <CreateCarContainer />
                break;
            case "Truck":
                this.CreateForm = <CreateTruckContainer />
                break;
            default:
                this.CreateForm = null;
        }
        this.setState({ displayForm: true });
    }

    handleInput(evt) {
        let value = evt.target.value;
        this.setState(prevState => {
            return {
                vehicleType: value
            }
        }, () => console.log(this.state.vehicleType)
        )
    }

    render() {
        return (
            <center>
            <div>
                <div className="select-container col-md-6">
                    <Select title={'Select Vehicle Type'} name={'VehicleType'} options={this.state.vehicleOptions} value={this.state.vehicleType} placeholder={'Select Vehicle'} handleChange={this.handleInput} />
                    <div className="button-container">
                        <Button action={this.handleButtonClick} type={"primary"} title={"Create"}/>
                    </div>
                </div>
                <div className={"form-container col-md-6"}>
                    {(this.state.displayForm) ? this.CreateForm : ''}
                </div>
                </div>
            </center>
        )
    }
}

export default VehicleContainer;