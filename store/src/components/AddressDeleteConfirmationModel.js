import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:first-child {
    background-color: #28a745;
    color: white;
    margin-right: 10px;
  }
  &:last-child {
    background-color: #dc3545;
    color: white;
  }
`;

const AddressDeleteConfirmationModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <p>Are you sure you want to delete this address?</p>
        <ButtonWrapper>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={onConfirm}>Delete</Button>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default AddressDeleteConfirmationModal;
