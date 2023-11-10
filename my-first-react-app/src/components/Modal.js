import './Modal.css'

export default function Modal({ children, handleCloseProperty }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>THis text is comming from the Modal Component</h3>
        {children}
        <button onClick={handleCloseProperty}>Close</button>
      </div>
    </div>
  )
}
