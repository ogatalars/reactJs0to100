import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: "00:00:00",
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  componentDidUpdate() {
    console.log("Atualizou");
  }

  shouldComponentUpdate() {
    console.log("Atualizou");
    return true;
  }
  render() {
    return (
      <div>
        <h3>Meu projeto {this.state.hora}</h3>
      </div>
    );
  }
}

export default App;
