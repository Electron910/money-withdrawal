// Write your code here
import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    const {item} = this.props
    const {value} = item
    return (
      <button type="button" className="button">
        {value}
      </button>
    )
  }
}

export default DenominationItem
