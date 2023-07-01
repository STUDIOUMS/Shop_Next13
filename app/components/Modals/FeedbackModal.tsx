import { Modal } from "react-bootstrap"
import FormField from "../FormField"

interface IFeedbackModal {
  show: boolean
  func: () => void
}

const FeedbackModal: React.FC<IFeedbackModal> = ({ func, show }) => {

  return (
    <Modal show={show} onHide={func} centered>
      <Modal.Header closeButton>
        <Modal.Title>Обратная связь</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormField place="Ваше имя" type="text" func={() => {}} />
        <FormField place="Ваш e-mail" type="email" func={() => {}} />
        <FormField place="Номер телефона" type="tel" func={() => {}} />
        <FormField place="Сообщение" type="area" func={() => {}} />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success">Отправить</button>
      </Modal.Footer>
    </Modal>
  )
}

export default FeedbackModal