import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem
  const deleteData = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list">
      <div className="history-list-card">
        <p className="time-text">{timeAccessed}</p>
        <div className="history-type">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <p className="history-title">{title}</p>
          <p className="domain-title">{domainUrl}</p>
        </div>
        <div className="delete-card">
          <button
            className="delete-btn"
            type="button"
            onClick={deleteData}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-image"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default HistoryItem
