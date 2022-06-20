import { Container, Button, Row, Col } from "reactstrap";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faCloud,faTemperature0 } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props){
  super(props);
  this.state={
    i:0,
  }
  }
  sicaklikArttir=()=>{
    this.setState({i:this.state.i+1});
  }
  render(){
    return (

    <div className="App">
      <Container>
        <h1>Hava Nasıl <span className="m-4 fs-1"><FontAwesomeIcon className="text-danger" icon={faTemperature0}/></span></h1>
        <h5>Şu anlık sıcaklık {this.state.i} derece <FontAwesomeIcon icon={faCloud} /></h5>
        <Button onClick={this.sicaklikArttir}>Sıcaklık Arttır</Button>
        <h6>3 birimde sıcaklık ölçümü</h6>
        <Row className="mt-3">
        <Col md="4"><Celcius sicaklik={this.state.i}></Celcius></Col>
        <Col md="4"><Fahrenheit sicaklik={(this.state.i*1.8)+32}></Fahrenheit></Col>
        <Col md="4"><Kelvin sicaklik ={this.state.i+273.15}></Kelvin></Col>
      </Row>
      </Container>

    </div>
    );
  }
}
export default App