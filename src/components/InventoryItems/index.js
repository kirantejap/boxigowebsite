import {Component} from 'react'

import {BsChevronDown} from 'react-icons/bs'

import CategoryItems from '../CategoryItems'

import './index.css'

class InventoryItems extends Component {
  state = {showItems: false}

  onClickItem = () => {
    this.setState(prevState => ({showItems: !prevState.showItems}))
  }

  render() {
    const {itemDetails} = this.props

    const {showItems} = this.state

    const {category, displayName} = itemDetails
    return (
      <li>
        <button
          type="button"
          className="items-container"
          onClick={this.onClickItem}
        >
          <div className="name-lenght">
            <h1 className="head-orange">{displayName}</h1>
            <div className="length-container">
              <p className="length">{itemDetails.category.length}</p>
            </div>
          </div>

          <div className="down-icon">
            <BsChevronDown />
          </div>
        </button>

        {showItems && (
          <ul className="category-container">
            {category.map(eachCategory => (
              <CategoryItems
                categoryDetails={eachCategory}
                key={eachCategory.id}
              />
            ))}
          </ul>
        )}
      </li>
    )
  }
}

export default InventoryItems
