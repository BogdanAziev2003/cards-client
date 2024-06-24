import axios from "axios"

function StatusModal(props) {
  const hendleStatus = (status) => {
    props.closeModal(false)
    axios
      .put(`http://81.200.149.251:5000/cards/changeStatus/${props.id}`, {
        status: status,
      })
      .then(() => {
        props.fetchData()
      })
      .catch((error) => {
        console.error("Error updating data:", error)
      })
  }

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__elem grev" onClick={() => hendleStatus("grev")}>
          grev
        </div>
        <div className="modal__elem work" onClick={() => hendleStatus("work")}>
          work
        </div>
        <div
          className="modal__elem block"
          onClick={() => hendleStatus("block")}
        >
          block
        </div>
        <div
          className="modal__elem problem"
          onClick={() => hendleStatus("problem")}
        >
          problem
        </div>
        <div className="modal__elem dead" onClick={() => hendleStatus("dead")}>
          dead
        </div>
      </div>
    </div>
  )
}

export default StatusModal
