import React, { Component } from 'react';
import Button from "../components/Button";


export class ViewCar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: []
        }
        this.loadData = this.loadData.bind(this);
    }

    loadData()
    {
        fetch("api/cars")
            .then(response => response.json())
            .then(data => {
                this.setState({ cars: data })
            })
        console.log(this.state.cars);
    }

    render() {
        return (
            <div>
                <Button action={this.loadData} type={"primary"} title={"View Cars"} />{" "}
            </div>
    )}
}