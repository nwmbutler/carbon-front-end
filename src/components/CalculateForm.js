import React from 'react';
import axios from 'axios';
import "./Form.css";
import { config } from '../Constants';
import Button from 'react-bootstrap/Button';

var url = config.url.API_URL

export default class CalculateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: '',
      destination: '',
      mode: '',
      apiResponse: ''
    };
  }

  async callAPI(new_data) {
    const response = await axios.post(`${url}`, { posted_data: new_data })
    // console.log('Returned data:', response.data.distance);
    this.setState({ apiResponse: response.data.distance })

  } catch(e) {
    console.log(`Axios request failed: ${e}`);
  }

  handleInputChange = e => {
    this.setState({

      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { origin, destination, mode } = this.state;

    const journey = {
      origin, destination, mode
    };

    this.callAPI(journey)
  }



  render() {
    return (
      <form class="calculator" onSubmit={this.handleSubmit}>
        <h2>Carbon Calculator</h2>
        <input
          type="text"
          name="origin"
          placeholder='Choose starting point...'
          onChange={this.handleInputChange}
        /><br />
        <input
          type="text"
          name='destination'
          placeholder='Choose destination...'
          onChange={this.handleInputChange}
        /><br />
        <br />

        <select name='mode' onChange={this.handleInputChange} value={this.state.mode}>
          <option value="null" ></option>
          <option value="driving" >Car</option>
          <option value="bicycling" >Bike</option>
          <option value="walking" >Walk</option>



        </select><br /><br />

        <Button variant="success" type="submit">
          Calculate
        </Button>

        <h3>{this.state.apiResponse} </h3>
      </form>
    );
  }
}
