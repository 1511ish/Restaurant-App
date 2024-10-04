import ReactDOM from 'react-dom';
import style from './Modal.module.css';

const BackDrop = props => {
    return <div className={style.backdrop} />
}
const ModalOverlay = props => {
    return (
        <div className={style.modal}>
            <div className={props.content}>{props.children}</div>
        </div>
    )
}
const portalElement = document.getElementById('overlays');
const Modal = props => {
    return (
        <>
          {ReactDOM.createPortal(<BackDrop/>,portalElement)}
          {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </>
    )
}

export default Modal;