import React, { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { humidityPercent: 0, temperatureC: 0, productid: 0, soilMoisture: 0};
  }

  componentDidMount() {
    fetch('https://node1.testnet-0bsnetwork.com/addresses/data/3Ms44MWh6hCm77puCyG8xtYv9GeRYaD5bWR')
      .then(data => data.json())
      .then((data) => { 
        data.forEach(element => {
          if(element.key === "humidityPercent") this.setState({ humidityPercent: element.value});
          if(element.key === "temperatureC") this.setState({ temperatureC: element.value});
          if(element.key === "productid") this.setState({ productid: element.value});
          if(element.key === "soilMoisture") this.setState({ soilMoisture: element.value});
        });
        
      }); 
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <p className="text-value">{this.state.humidityPercent}</p>
            <p className="text-title">Humidity</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <p className="text-value">{this.state.temperatureC}</p>
            <p className="text-title">Temperature</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <p className="text-value">{this.state.productid}</p>
            <p className="text-title">Product Id</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <p className="text-value">{this.state.soilMoisture}</p>
            <p className="text-title">Soil Moisture</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
