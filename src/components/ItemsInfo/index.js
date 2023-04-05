import './index.css'

import InventoryItems from '../InventoryItems'

const ItemsInfo = props => {
  const {itemDetails} = props

  const {
    newElevatorAvailability,
    newFloorNo,
    oldElevatorAvailability,
    oldFloorNo,
    oldHouseAdditionalInfo,
    inventory,
  } = itemDetails

  console.log(inventory)

  return (
    <div className="info-container">
      <div className="add-info-container">
        <div className="add-top">
          <h1 className="item-head">Additional Information</h1>
          <button type="button" className="info-btn">
            Edit Additional Info
          </button>
        </div>
        <p className="card-para">{oldHouseAdditionalInfo}</p>
      </div>

      <div>
        <div className="add-top">
          <h1 className="item-head">House Details</h1>
          <button type="button" className="info-btn">
            Edit House Details
          </button>
        </div>

        <h1 className="head-orange">Existing House Details</h1>
        <div className="existing-new-container">
          <div>
            <h1 className="card-head">Floor No.</h1>
            <p className="card-para">{oldFloorNo}</p>
          </div>

          <div>
            <h1 className="card-head">Elevator Available</h1>
            <p className="card-para">{oldElevatorAvailability}</p>
          </div>

          <div>
            <h1 className="card-head">
              Distance from Elevator/Staircase to truck
            </h1>
            <p className="card-para">{oldFloorNo}</p>
          </div>
        </div>

        <h1 className="head-orange">New House Details</h1>
        <div className="existing-new-container">
          <div>
            <h1 className="card-head">Floor No.</h1>
            <p className="card-para">{newFloorNo}</p>
          </div>

          <div>
            <h1 className="card-head">Elevator Available</h1>
            <p className="card-para">{newElevatorAvailability}</p>
          </div>

          <div>
            <h1 className="card-head">
              Distance from Elevator/Staircase to truck
            </h1>
            <p className="card-para">{newFloorNo}</p>
          </div>
        </div>

        <div className="add-top">
          <h1 className="item-head">Inventory Details</h1>
          <button type="button" className="info-btn">
            Edit Inventory
          </button>
        </div>

        <ul className="inventory-container">
          {inventory.map(each => (
            <InventoryItems itemDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ItemsInfo
