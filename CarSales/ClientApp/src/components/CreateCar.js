import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export class CreateCar extends Component {

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
  }

  render() {
    return (
        <div>
            <h2>Enter Car Details</h2>
            <Button content='Create Car' primary>Increment</Button>
        </div>
    );
  }
}
