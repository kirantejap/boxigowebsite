import './index.css'

import {Component} from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {FaBoxes} from 'react-icons/fa'
import {GiPathDistance} from 'react-icons/gi'
import {BiCalendar} from 'react-icons/bi'
import {TiPencil} from 'react-icons/ti'
import {IoIosWarning} from 'react-icons/io'

import {format} from 'date-fns'

import ItemsInfo from '../ItemsInfo'

class MoveCard extends Component {
  state = {
    showItems: false,
  }

  changeState = () => {
    this.setState(prevState => ({showItems: !prevState.showItems}))
  }

  render() {
    const {moveDetails} = this.props

    const {showItems} = this.state

    const {
      estimateId,
      dateCreated,
      distance,
      fromAddress,
      toAddress,
      totalItems,
      propertySize,
      newElevatorAvailability,
      newFloorNo,
      oldElevatorAvailability,
      oldFloorNo,
      oldHouseAdditionalInfo,
      inventory,
    } = moveDetails

    const itemDetails = {
      newElevatorAvailability,
      newFloorNo,
      oldElevatorAvailability,
      oldFloorNo,
      oldHouseAdditionalInfo,
      inventory,
    }

    const result = format(new Date(dateCreated), `MMM dd, yyyy, h:mm aaa`)

    return (
      <>
        <div className="card-container">
          <div className="from-to-container">
            <div className="address-container">
              <h1 className="card-head">From</h1>
              <p className="card-para">{fromAddress}</p>
            </div>

            <div className="icon-container">
              <BsArrowRight className="right-icon" />
            </div>

            <div className="address-container">
              <h1 className="card-head">To</h1>
              <p className="card-para">{toAddress}</p>
            </div>

            <div className="address-container">
              <h1 className="card-head">Request#</h1>
              <p className="card-para">{estimateId}</p>
            </div>
          </div>

          <div className="details-container">
            <div className="details-card">
              <AiFillHome className="details-icon" />
              <p className="card-para">{propertySize}</p>
            </div>

            <div className="details-card">
              <FaBoxes className="details-icon" />
              <p className="card-para">{totalItems}</p>
            </div>

            <div className="details-card">
              <GiPathDistance className="details-icon" />
              <p className="card-para">{distance}</p>
            </div>

            <div className="details-card">
              <BiCalendar className="details-icon" />
              <p className="card-para">{result}</p>
              <TiPencil />
            </div>

            <div className="details-card">
              <input
                className="details-icon"
                id="check"
                type="checkbox"
                defaultChecked
              />
              <label className="card-para" htmlFor="check">
                Is flexible
              </label>
            </div>

            <div className="details-card">
              <button
                type="button"
                className="view-btn"
                onClick={this.changeState}
              >
                View Movie Details
              </button>

              <button type="button" className="quote-btn">
                Quotes Awaiting
              </button>
            </div>
          </div>

          <div className="details-card">
            <IoIosWarning className="disclaimer-icon" />
            <p className="card-para ">
              <span className="span">Disclaimer:</span> Please update your move
              date before two of shifting
            </p>
          </div>

          {showItems && <ItemsInfo itemDetails={itemDetails} />}
          <hr className="line" />
        </div>
      </>
    )
  }
}

export default MoveCard
