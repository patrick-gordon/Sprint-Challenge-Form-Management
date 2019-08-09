import React from 'react';
import './App.css';
import FormikForm from './Components/SignupForm'
import Axios from 'axios';
import Recipies from './Components/Recipies';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      recipies: ['']
    }
  }

  fetchData = () => {
    Axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(res => {
        console.log(res);
        this.setState({ recipies: res.data })
      })
      .catch(err => console.log('err', err))
  }

  com
  componentDidMount(){
    this.fetchData()
  }


  render() {
    return (
      <div className="App">
        <FormikForm />
        <Recipies recipies={this.state.recipies} />
      </div>
    );
  }
}

export default App;
