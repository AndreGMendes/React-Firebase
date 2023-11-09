import './Modal.css'

export default function Modal({ children, handleCloseProperty }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        {children}
        <button onClick={handleCloseProperty}>Close</button>
      </div>
    </div>
  )
}
