// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    googleSearch: '',
  }

  change = event => {
    this.setState({
      googleSearch: event.target.value,
    })
  }

  displaySuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  render() {
    const {googleSearch} = this.state
    const {suggestionsList} = this.props
    const filterSearch = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="google-container">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search">
            <div className="inputSearch">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                className="searchIcon"
                alt="search icon"
              />
              <input
                type="search"
                onChange={this.change}
                placeholder="Search Google"
                value={googleSearch}
              />
            </div>
            <ul>
              {filterSearch.map(eachSuggestion => (
                <SuggestionItem
                  suggestionDetails={eachSuggestion}
                  key={eachSuggestion.id}
                  displaySuggestion={this.displaySuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
