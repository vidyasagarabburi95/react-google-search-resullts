// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, displaySuggestion} = props
  const {suggestion} = suggestionDetails
  const clickSuggestion = () => {
    displaySuggestion(suggestion)
  }
  return (
    <li className="suggestion-container">
      <p>{suggestion}</p>
      <button type="button" onClick={clickSuggestion}>
        <img
          className="arrow"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
