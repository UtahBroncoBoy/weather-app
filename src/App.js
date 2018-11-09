import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '3cc27bacc01c4b4984d00fa344d95a6d';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city && country) {
      try {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ''
        })
      } catch (error){
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: 'There was an issue while attempting to access the data. Make sure the city and country have been entered correctly.'
        })
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter a valid city and country.'
      })   
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='main container'>
          <div className='row'>
            <div className='col-sm-4'>
              <Titles />
            </div>
            <div className='col-sm-8'>
              <Form getWeather={this.getWeather}/>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
            <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



        