import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onArrow = id => {
    const {suggestionsList} = this.props
    const suggetionClicked = suggestionsList.filter(
      eachSuggestion => eachSuggestion.id === id,
    )
    this.setState({searchInput: suggetionClicked[0].suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    // filters the search result based on search input value
    const searchSuggestionList = suggestionsList.filter(eachSuggestion => {
      const searchValue = searchInput.toLowerCase()
      const lowerSuggestion = eachSuggestion.suggestion.toLowerCase()
      return lowerSuggestion.includes(searchValue)
    })

    return (
      <div className="main_container">
        <div className="second_main_container">
          <img
            className="google_logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search_suggestions_box">
            <div className="search_container">
              <img
                className="search_icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
              />
              <input
                className="input_search_box"
                value={searchInput}
                type="search"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="search_suggest_list_container">
              {searchSuggestionList.map(eachSuggestion => (
                <SuggestionItem
                  eachSuggestion={eachSuggestion}
                  key={eachSuggestion.id}
                  onArrow={this.onArrow}
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
