import ReactDOM from 'react-dom'
import './Modal.css'


export default function Modal({ children, handleShowButtonProperty }) {

  return ReactDOM.createPortal((


    <div className="modal-backdrop">
      <div className="modal">
        <h3>This text is comming from the Modal Component</h3>
        {children}
        <button onClick={handleShowButtonProperty}>Close</button>
      </div>
    </div>
  ), document.querySelector('#root')); 

}

// ----------------------------------------------
// Example of Targetting a specific element
// ----------------------------------------------

// document.querySelector("#root > div.App"))
// console.log(document.querySelector("#root > div:nth-child(2)"))
