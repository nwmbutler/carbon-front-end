import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

export default class BusForm extends React.Component {
  render() {
    return (
      <div>
        <Form class="calculator" onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <h2>Carbon Calculator</h2>

            <Form.Control
              type="text"
              name="origin"
              placeholder="Choose Departure bus Station "
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="destination"
              placeholder="Choose Arrival bus station"
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="dropDown">
          <Form.Control as="select" name='mode' onChange={this.props.handleInputChange} >
            <option hidden >Transport Mode</option>
            <option value="driving" >Car</option>
            <option value="bicycling">Bike</option>
            <option value="walking">Walk</option>
            <option value="bus"selected>Bus</option>
            <option value="train" >Train</option>
            <option value="airplane" >Airplane</option>
          </Form.Control>
        </Form.Group>

          <Button variant="success" type="submit">
            Calculate
          </Button>
        </Form>
      </div>
    );
  }
}