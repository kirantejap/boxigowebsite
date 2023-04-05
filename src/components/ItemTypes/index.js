import './index.css'

const ItemTypes = props => {
  const {typeDetails} = props

  const {displayName, qty} = typeDetails

  return (
    <div>
      <div className="type-container">
        <p className="item-head">{displayName}</p>
        <h1 className="item-head">{qty}</h1>
      </div>
    </div>
  )
}

export default ItemTypes
