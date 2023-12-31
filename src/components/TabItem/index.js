// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, updateState, isSelected} = props
  const {tabId, displayText} = tabDetails

  const onTabClicked = () => {
    updateState(tabId)
  }
  const selectedCategory = isSelected ? 'button selected-btn' : 'button'
  return (
    <li className="list-element">
      <button type="button" className={selectedCategory} onClick={onTabClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
