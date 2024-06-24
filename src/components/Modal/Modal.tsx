import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type TModalProps = {
	children: React.ReactNode;
	isModalOpen: boolean;
	setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const StyledModal = styled.dialog<{ isOpen: boolean }>`
	max-width: 20rem;
	padding: 2rem;
	border: 0;
	border-radius: 0.5rem;
	box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;
	position: fixed;
	top: 30%;
	left: 60%;
	z-index: 999;
	transform: ${(props) =>
		props.isOpen ? 'translateX(-100%)' : ' translateX(0)'};
	transition: transform 0.5s ease-in-out;
	&::backdrop {
		background: hsl(0 0% 0% / 50%);
	}
`;

const ClosedButton = styled.button`
	font-size: 0.75em;
	position: absolute;
	top: 0.75em;
	right: 0.75em;
	cursor: pointer;
	border: 1px solid #3f60e3;
	font-weight: 500;
	color: #3f60e3;
	border-radius: 6px;
	background-color: #fff;
`;

const Modal: React.FC<TModalProps> = ({
	children,
	isModalOpen,
	setModalOpen,
}) => {
	const modalRef = useRef<HTMLDialogElement | null>(null);

	const handleClose = () => {
		setModalOpen(false);
	};

	useEffect(() => {
		const modalElement = modalRef.current;
		if (modalElement) {
			if (isModalOpen) {
				modalElement.showModal();
			} else {
				modalElement.close();
			}
		}
	}, [isModalOpen]);

	return (
		<StyledModal ref={modalRef} isOpen={isModalOpen}>
			<ClosedButton type="button" onClick={handleClose}>
				&#x2715;
			</ClosedButton>

			{isModalOpen && children}
		</StyledModal>
	);
};
export default Modal;
