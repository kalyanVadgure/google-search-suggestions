import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onArrow} = props
  const {suggestion, id} = eachSuggestion

  const onArrowClicked = () => {
    onArrow(id)
  }

  return (
    <li className="suggestion_item_container">
      <p className="suggestion_text">{suggestion}</p>
      <button type="button" className="arrow_button" onClick={onArrowClicked}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow_image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
