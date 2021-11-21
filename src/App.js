import React from "react";
import Header from "./components/layout/Header/Header";
import Menu from "./components/layout/Menu/Menu";
import Hotels from "./components/views/Hotels/Hotels";

class App extends React.Component {
  hotels = [
    {
      id: 1,
      name: 'Blue lagun',
      location: 'Spain',
      rating: '8.4',
      descr: 'Tu będzie opis...',
      image: '',
    },
    {
      id: 2,
      name: 'Horizon',
      location: 'Poland',
      rating: '8.0',
      descr: '',
      image: '',
    },
    {
      id: 3,
      name: 'LatinoRino',
      location: 'Greece',
      rating: '8.9',
      descr: '',
      image: '',
    }
  ];
  state = {
    hotels: this.hotels
  }

  searchHandler(term) {
    console.log('szukaj z app', term);
    const hotels = [...this.hotels].filter(
      x => x.name.toLowerCase().includes(term.toLowerCase() 
    ));
    this.setState({hotels});
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <Header onSearch={(term) => this.searchHandler(term)}/>
        <Hotels hotels={this.state.hotels}/>
      </div>
    )
  }
}

export default App;
