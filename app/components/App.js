import React from 'react';
import axios from 'axios';
import ProgressBar from './ProgressBar';
import ButtonContainer from './ButtonContainer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [],
      bars: [],
      limit: 0,
      selected: 0,
    };
  }


  componentDidMount() {
    axios.get('http://pb-api.herokuapp.com/bars')
      .then((res) => {
        this.setState({
          buttons: res.data.buttons,
          bars: res.data.bars,
          limit: res.data.limit,
        });
      });
  }

  onChange = (evt) => {
    evt.preventDefault();
    this.setState({
      selected: evt.target.value,
    });
  };
  onClick = (evt) => {
    evt.preventDefault();
    const value = Number(this.state.bars[this.state.selected]) +
      Number(evt.target.value);
    const bars = this.state.bars.slice();
    bars[this.state.selected] = value;
    if (value <= 0) {
      bars[this.state.selected] = 0;
    }
    this.setState({
      bars,
    })
  };

  render() {
    return (
      <div className="container">
        <h2 id="heading">ProgressBar Demo</h2>
        <div className="progressbar-container">
          {this.state.bars.map((item, index) =>
            <ProgressBar progress={item} index={index} limit={this.state.limit} />)
          }
          <ButtonContainer
            buttons={this.state.buttons}
            onChange={this.onChange}
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
