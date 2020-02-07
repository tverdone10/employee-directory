import React, { Component } from "react";
// import API from "../../utils/API";
import Search from "./Search"
import axios from 'axios'

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

//   componentDidMount() {
//     API.search()
//     .then (res =>this.setState(() => 
//     console.log(res)
//     ({result: res.data.results})))
//     .catch(err => console.log(err))


// }

componentDidMount (){
   axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        const results = res.data;
        this.setState({results})
        console.log(this.state.results)
    })
}

// handleSearch(search){
//     return employees =>{
//       return employees.name.first.toLowerCase().includes(search.toLowerCase()) || !search
//     }
//   }
  
//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//   };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {

    return (
      <div>
        <Search
        //   search={this.state.search}
        //   handleFormSubmit={this.handleFormSubmit}
        //   handleInputChange={this.handleInputChange}
        />
        {/* <ResultList results={this.state.results} /> */}
      <ul>
      {this.state.results.map(result => <li>{result.name}</li>)}
      </ul>
      </div>
    );
}
}


export default SearchResultContainer;
