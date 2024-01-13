import {Modal} from 'flowbite-react';

const OnlineViewModel = ({openModal, setOpenModal}) => {
  return (
    <>
      <Modal
        show={openModal}
        size="7xl"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="h-screen">
            <h1>sdfsjdf</h1>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default OnlineViewModel;
