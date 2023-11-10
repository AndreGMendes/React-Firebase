import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose }) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
      <div className="modal">
        <h3 /*style= {{color: "yellow"}}*/>I'm coming from the Model Component</h3>
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ), document.body)
}
