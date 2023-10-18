// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  render() {
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card">
          <div className="name-container">
            <p className="letter">S</p>
            <h1 className="name-logo">Sarah Williams</h1>
          </div>

          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="rupees-container">
              <h1 className="amount">2000</h1>
              <p className="rupees">In Rupees</p>
            </div>
          </div>

          <div>
            <h1 className="amount">Withdraw</h1>
            <p className="balance">CHOOSE SUM (IN RUPEES)</p>
            <div>
              {denominationsList.map(item => (
                <DenominationItem key={item.id} value={item.value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
