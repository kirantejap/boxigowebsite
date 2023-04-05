import './index.css'
import ItemTypes from '../ItemTypes'

const CategoryItems = props => {
  const {categoryDetails} = props

  const {displayName} = categoryDetails

  return (
    <ul className="item-container">
      <h1 className="item-head">{displayName}</h1>
      {categoryDetails.items.map(each => (
        <ItemTypes typeDetails={each} key={each.uniqueId} />
      ))}
    </ul>
  )
}

export default CategoryItems
