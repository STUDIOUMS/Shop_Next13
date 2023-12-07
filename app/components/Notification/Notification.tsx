'use client'

import { closeToast } from "@/app/store/appSlice"
import { AppDispatch, RootState } from "@/app/store/store"
import { useDispatch, useSelector } from "react-redux"

const Notification: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const show = useSelector((state: RootState) => state.app.toast)
  const text = useSelector((state: RootState) => state.app.toastText)

  // closeToast
  const closeToastHandler = () => {
    dispatch(closeToast())
  }

  return (
    <div>
      {/* <ToastContainer className="position-fixed pe-3 pb-3" position="bottom-end">
        <Toast show={show} onClose={closeToastHandler} autohide delay={3000}>
          <Toast.Header>
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">1 sec ago</small>
          </Toast.Header>
          <Toast.Body>{text}</Toast.Body>
        </Toast>
      </ToastContainer> */}
    </div>
  )
}

export default Notification