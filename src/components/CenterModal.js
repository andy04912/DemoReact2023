import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  const handleConfirm = ()=>{
    props.onHide();
    window.location.reload();
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.Title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.Title}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleConfirm}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal