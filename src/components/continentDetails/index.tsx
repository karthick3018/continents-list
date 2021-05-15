import React from 'react';
import Modal from 'react-modal';
import Loader from '../loader';
import ContinentImage from './continents.jpeg'
import './index.css';


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
    countries: [];
  };
  isModalOpen: boolean;
  isLoading: boolean;
  onModalClose: () => void;
};

const ContinentDetails = ({
  isModalOpen,
  onModalClose,
  details,
  isLoading
}: TContinentDetailsProps) => {
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onModalClose}
        style={customStyles}
        contentLabel="details-modal"
      >
        <div className="modal-content">
          <figure className="modal-figure">
            <img src={ContinentImage} alt="continents" />
          </figure>
          {!isLoading ?
            <>
            <h3>About {details?.name}</h3>
            <hr/>
            <p className="details">
              <span className="bold">{details?.name}</span> is one of the
              beautiful continent. It is probably know using it's code{" "}
              <span className="bold">{details?.code}.</span> And it has about{" "}
              <span className="bold">{details?.countries?.length}</span>{" "}
              countries, each country has it's own capital and currency.
            </p>
          </>:<Loader/>}
        </div>
      </Modal>
    </>
  );
};

export default ContinentDetails;