import React from "react";
import styled from "styled-components";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
};

const Modal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton className="close" onClick={onClose} />
        {content}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const ModalContent = styled.div`
  width: 50%;
  height: 50%;
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: right;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  border: none;
  width: 8%;
  height: 8%;
  cursor: pointer;
  color: gray;
  transition: color 0.2s;
  background: none;
  
  &::before {
    content: "✕";
    font-size: 36px;
    line-height: 1;
  }

  &:hover {
    color: darkgray;
  }
`;

export default Modal;
