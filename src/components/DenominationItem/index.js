import './index.css'

const DenominationItem = props => {
  const {eachButtonSum, getUpdatedBalance} = props
  const {value, id} = eachButtonSum
  const onclickedbutt = () => {
    const {buttonId} = props
    const presentId = `button${id}`
    if (buttonId === presentId) {
      getUpdatedBalance(presentId)
    }
  }
  return (
    <li className="buttonlistItem">
      <button className="button" type="button" onClick={onclickedbutt}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
