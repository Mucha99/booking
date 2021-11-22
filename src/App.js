import React from "react";
import Header from "./components/layout/Header/Header";
import Menu from "./components/layout/Menu/Menu";
import Hotels from "./components/views/Hotels/Hotels";
import LoadingIcon from "./components/common/LoadingIcon/LoadingIcon";

class App extends React.Component {
  hotels = [
    {
      id: 1,
      name: 'Blue lagun',
      location: 'Spain',
      rating: 8.4,
      descr: 'Tu będzie opis...',
      image: 'https://exp.cdn-hotels.com/hotels/49000000/48440000/48438800/48438779/7eace0bb_y.jpg?impolicy=fcrop&w=500&h=333&q=high',
    },
    {
      id: 2,
      name: 'Horizon',
      location: 'France',
      rating: 8.0,
      descr: '',
      image: 'https://content.r9cdn.net/himg/64/9f/99/hotelsdotcom-699905-a6b6c8ac_w-288035.jpg',
    },
    {
      id: 3,
      name: 'LatinoRino',
      location: 'Greece',
      rating: 8.9,
      descr: '',
      image: 'https://liptakowka.com/photos/728/DSC_7071_AuroraHDR2019-edit.jpg.jpg.jpg',
    }
  ];
  state = {
    hotels: [],
    loading: true,
  }

  searchHandler(term) {
    console.log('szukaj z app', term);
    const hotels = [...this.hotels].filter(
      x => x.name.toLowerCase().includes(term.toLowerCase() 
    ));
    this.setState({hotels});
  }

  componentDidMount() {
    setTimeout( () => {
      this.setState({ 
        hotels: this.hotels, 
        loading: false 
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <Header onSearch={(term) => this.searchHandler(term)}/>
        {this.state.loading 
         ? <LoadingIcon />
         : <Hotels hotels={this.state.hotels}/>
        }
      </div>
    )
  }
}

export default App;
