import { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  // handleClick for modal
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div>
        <Button onClick={handleClick} primary>
          Open Modal
        </Button>
        
        {showModal && <Modal/>}
      </div>
    </>
  );
};
export default ModalPage;
