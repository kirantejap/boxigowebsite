import {BsTruck} from 'react-icons/bs'
import {RiAccountCircleFill} from 'react-icons/ri'
import {GiCalculator} from 'react-icons/gi'
import {BiLogOutCircle} from 'react-icons/bi'

import './index.css'

import {Component} from 'react'
import MoveCard from '../MoveCard'

class MyMoves extends Component {
  state = {
    movesList: [],
  }

  componentDidMount() {
    this.getMoves()
  }

  getMoves = async () => {
    const options = {
      method: 'GET',
    }

    const apiUrl = 'http://test.api.boxigo.in/sample-data/'

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = data.Customer_Estimate_Flow.map(eachMove => ({
        estimateId: eachMove.estimate_id,
        dateCreated: eachMove.date_created,
        distance: eachMove.distance,
        fromAddress: eachMove.moving_from,
        toAddress: eachMove.moving_to,
        totalItems: eachMove.total_items,
        propertySize: eachMove.property_size,

        newElevatorAvailability: eachMove.new_elevator_availability,
        newFloorNo: eachMove.new_floor_no,
        oldElevatorAvailability: eachMove.old_elevator_availability,
        oldFloorNo: eachMove.old_floor_no,
        oldHouseAdditionalInfo: eachMove.old_house_additional_info,
        inventory: eachMove.items.inventory,
      }))

      this.setState({movesList: updatedData})
    }
  }

  render() {
    const {movesList} = this.state
    return (
      <div className="bg-container">
        <ul className="sideBar-container">
          <li className="list-container active-menu">
            <BsTruck className="icon" />
            <p className="menu-text">MY MOVES</p>
          </li>

          <li className="list-container">
            <RiAccountCircleFill className="icon" />
            <p className="menu-text">MY PROFILE</p>
          </li>

          <li className="list-container">
            <GiCalculator className="icon" />
            <p className="menu-text">GET QUOTE</p>
          </li>

          <li className="list-container">
            <BiLogOutCircle className="icon" />
            <p className="menu-text">LOGOUT</p>
          </li>
        </ul>

        <ul className="moves-container">
          <h1 className="head">My Moves</h1>
          {movesList.map(each => (
            <MoveCard moveDetails={each} key={each.estimateId} />
          ))}
        </ul>
      </div>
    )
  }
}

export default MyMoves
