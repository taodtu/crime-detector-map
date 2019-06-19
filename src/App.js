import React, { Component } from 'react';
import Map from './component/Map'
import './App.css';
import { Typography, Select, MenuItem } from '@material-ui/core';
import axios from 'axios';
import { Router } from '@reach/router';
import CrimeItem from './component/CrimeItem'

const INITIAL_STATE = {
  position: [53.4808, -2.2426],
  date: "2019-01",
  crimeList: null
}
class App extends Component {
  state = {
    ...INITIAL_STATE
  }
  componentDidMount() {
    axios.get(`https://data.police.uk/api/crimes-at-location?date=${this.state.date}&lat=${this.state.position[0]}&lng=${this.state.position[1]}`)
      .then(result => {
        this.setState({ ...this.state, crimeList: result.data })
      })
  }
  getCrime = (date) => {
    axios.get(`https://data.police.uk/api/crimes-at-location?date=${date}&lat=${this.state.position[0]}&lng=${this.state.position[1]}`)
      .then(result => {
        this.setState({ position: [53.4808, -2.2426], date, crimeList: result.data })
      })
  }
  handleChange = ({ target }) => {
    const { value } = target;
    console.log(value)
    this.getCrime(value)
  }

  render() {
    const { position, crimeList, date } = this.state
    return (
      <div className="App">
        <div className='title'><Typography variant='h3' margin='normal' gutterBottom> Manchester crime detector </Typography>
          <label htmlFor="">Select Month</label>
          <Select value={date} autoWidth={true} onChange={this.handleChange}
            inputProps={{
              name: 'Month',
              id: 'month-select',
            }}>
            <MenuItem value="2019-01">2019-01</MenuItem>
            <MenuItem value="2019-02">2019-02</MenuItem>
            <MenuItem value="2019-03">2019-03</MenuItem>
            <MenuItem value="2019-04">2019-04</MenuItem>
            <MenuItem value="2019-05">2019-05</MenuItem>

          </Select>

        </div>
        {crimeList && <Router>
          <CrimeItem path='/crime' crimeList={crimeList} />
          <Map path='/' position={position} />
        </Router>}
      </div>
    );
  }
}

export default App;
