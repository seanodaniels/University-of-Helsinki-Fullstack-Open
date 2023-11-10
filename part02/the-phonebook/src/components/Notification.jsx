const Notification = ({ changeNotification }) => {
  if (changeNotification.message === null) {
    return null
  }

  const classString = `notification ${changeNotification.type}`

  return (
    <div className={classString}>
      {changeNotification.message}
    </div>
  )
}

export default Notification