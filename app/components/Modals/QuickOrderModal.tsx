import { useState } from "react";
import { Modal } from "react-bootstrap"
import FormField from "../FormField"

interface IQuickOrderModal {
  show: boolean
  func: () => void
}

const QuickOrderModal: React.FC<IQuickOrderModal> = ({ func, show }) => {

  return (
    <Modal show={show} onHide={func} centered>
      <Modal.Header closeButton>
        <Modal.Title>Быстрый заказ</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormField place="Номер телефона" type="tel" func={() => {}} />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success">Быстрый заказ</button>
      </Modal.Footer>
    </Modal>
  )
}

export default QuickOrderModal