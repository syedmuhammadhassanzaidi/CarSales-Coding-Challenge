import React, { Component } from 'react';
import VehicleContainer from '../containers/VehicleContainer';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <VehicleContainer />
            </div>
        );
    }
}
