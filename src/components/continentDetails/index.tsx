import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type TContinentDetailsProps = {
  details: {
    name: string;
    code: string;
    countries : []
  };
  isModalOpen: boolean;
  onModalClose: () => void;
};

const ContinentDetails = ({
  isModalOpen,
  onModalClose,
  details,
}: TContinentDetailsProps) => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onModalClose}
        style={customStyles}
        contentLabel="details-modal"
      >
       <div>
         <p>{details?.name}</p>
         <p>{details?.code}</p>
         <p>{details?.countries?.length}</p>
       </div>
      </Modal>
    </div>
  );
};

export default ContinentDetails;