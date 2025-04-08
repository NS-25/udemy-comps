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

  /// Modal extract for clear vision

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <>
      <div>
        <Button onClick={handleClick} primary>
          Open Modal
        </Button>
        {showModal && modal}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc
          mauris, posuere eget ornare in, facilisis sed massa. Quisque hendrerit
          ipsum nec magna iaculis fringilla. Donec interdum arcu sit amet diam
          maximus, eget accumsan neque cursus. Ut felis sapien, imperdiet
          ultricies lectus vitae, eleifend cursus arcu. Phasellus aliquam vel
          turpis id volutpat. Maecenas fringilla nisi vitae ullamcorper
          ultricies. Pellentesque gravida pellentesque elit, in efficitur mi
          commodo eget. Praesent sit amet magna dictum, convallis odio eget,
          consequat nulla. Pellentesque pulvinar eros eros, eu sodales metus
          euismod vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc
          mauris, posuere eget ornare in, facilisis sed massa. Quisque hendrerit
          ipsum nec magna iaculis fringilla. Donec interdum arcu sit amet diam
          maximus, eget accumsan neque cursus. Ut felis sapien, imperdiet
          ultricies lectus vitae, eleifend cursus arcu. Phasellus aliquam vel
          turpis id volutpat. Maecenas fringilla nisi vitae ullamcorper
          ultricies. Pellentesque gravida pellentesque elit, in efficitur mi
          commodo eget. Praesent sit amet magna dictum, convallis odio eget,
          consequat nulla. Pellentesque pulvinar eros eros, eu sodales metus
          euismod vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc
          mauris, posuere eget ornare in, facilisis sed massa. Quisque hendrerit
          ipsum nec magna iaculis fringilla. Donec interdum arcu sit amet diam
          maximus, eget accumsan neque cursus. Ut felis sapien, imperdiet
          ultricies lectus vitae, eleifend cursus arcu. Phasellus aliquam vel
          turpis id volutpat. Maecenas fringilla nisi vitae ullamcorper
          ultricies. Pellentesque gravida pellentesque elit, in efficitur mi
          commodo eget. Praesent sit amet magna dictum, convallis odio eget,
          consequat nulla. Pellentesque pulvinar eros eros, eu sodales metus
          euismod vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc
          mauris, posuere eget ornare in, facilisis sed massa. Quisque hendrerit
          ipsum nec magna iaculis fringilla. Donec interdum arcu sit amet diam
          maximus, eget accumsan neque cursus. Ut felis sapien, imperdiet
          ultricies lectus vitae, eleifend cursus arcu. Phasellus aliquam vel
          turpis id volutpat. Maecenas fringilla nisi vitae ullamcorper
          ultricies. Pellentesque gravida pellentesque elit, in efficitur mi
          commodo eget. Praesent sit amet magna dictum, convallis odio eget,
          consequat nulla. Pellentesque pulvinar eros eros, eu sodales metus
          euismod vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nunc
          mauris, posuere eget ornare in, facilisis sed massa. Quisque hendrerit
          ipsum nec magna iaculis fringilla. Donec interdum arcu sit amet diam
          maximus, eget accumsan neque cursus. Ut felis sapien, imperdiet
          ultricies lectus vitae, eleifend cursus arcu. Phasellus aliquam vel
          turpis id volutpat. Maecenas fringilla nisi vitae ullamcorper
          ultricies. Pellentesque gravida pellentesque elit, in efficitur mi
          commodo eget. Praesent sit amet magna dictum, convallis odio eget,
          consequat nulla. Pellentesque pulvinar eros eros, eu sodales metus
          euismod vel.
        </p>
      </div>
    </>
  );
};
export default ModalPage;
