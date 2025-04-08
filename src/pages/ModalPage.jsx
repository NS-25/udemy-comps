import { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  // handleClick for modal
  const handleClick = () => {
    setShowModal(true);
  };

  // handleClose function for modal

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <Button onClick={handleClick} primary>
          Open Modal
        </Button>

        {showModal && <Modal onClose={handleClose} />}
      </div>
    </>
  );
};
export default ModalPage;
