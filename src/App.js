import { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {
  id=0;
  state = {
    information: [],
  }
  
  handleCreate = (data) => {
    console.log(data)
    const { information } = this.state
    this.setState({
      information: information.concat(Object.assign({}, data, {id: this.id++}))
    });
  }
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        {/* {JSON.stringify(this.state.information)} */}
        <PhoneInfoList data={this.state.information}></PhoneInfoList>
      </div>
    )
  }
}

export default App;
