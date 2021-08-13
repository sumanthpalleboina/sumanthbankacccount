import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  getUpdatedBalance = presentId => {
    const {amount} = this.state
    if (amount !== 0) {
      switch (presentId) {
        case 'button1':
          this.setState(prevState => ({amount: prevState.amount - 50}))
          break
        case 'button2':
          this.setState(prevState => ({amount: prevState.amount - 100}))
          break
        case 'button3':
          this.setState(prevState => ({amount: prevState.amount - 200}))
          break
        case 'button4':
          this.setState(prevState => ({amount: prevState.amount - 500}))
          break
        default:
          break
      }
    }
  }

  getWarning = () => {
    const {amount} = this.state
    return amount === 0 ? 'warning-new' : 'warning'
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const warnText = this.getWarning()
    return (
      <div className="app-container">
        <div className="withdrawal-page-section">
          <div className="account-profile">
            <p className="profile-iconMake">S</p>
            <h1 className="profile-name">Sumanth Palleboina</h1>
          </div>
          <div className="balance-container">
            <div>
              <h1 className="your-balance">Your Balance</h1>
              <p className={warnText}>Insufficient balance</p>
            </div>
            <div className="amount-div">
              <h1 className="amount">{amount}</h1>
              <p className="amount-tag">In Rupees</p>
            </div>
          </div>
          <h1 className="Withdraw">Withdraw</h1>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <div className="denomination-buttons">
            {denominationsList.map(each => (
              <DenominationItem
                eachButtonSum={each}
                key={each.id}
                buttonId={`button${each.id}`}
                getUpdatedBalance={this.getUpdatedBalance}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
