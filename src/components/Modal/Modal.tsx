import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type TModalProps = {
	children: React.ReactNode;
	title: string;
};

const StyledModal = styled.dialog<{ isOpen: boolean }>`
	max-width: 20rem;
	padding: 2rem;
	margin: 0 auto;
	border: 0;
	border-radius: 0.5rem;
	box-shadow: hsl(0 0% 0% / 10%) 0 0 0.5rem 0.25rem;
	position: fixed;
	top: 30%;
	z-index: 999;
	&::backdrop {
		background: hsl(0 0% 0% / 50%);
	}
`;

const ClosedButton = styled.button`
	font-size: 0.75em;
	position: absolute;
	top: 0.25em;
	right: 0.25em;
`;

const Modal: React.FC<TModalProps> = ({ children, title }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const modalRef = useRef<HTMLDialogElement | null>(null);

	const handleOpen = () => {
		setModalOpen(true);
	};
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
		<>
			<button type="button" onClick={handleOpen}>
				{title}
			</button>
			<StyledModal ref={modalRef} isOpen={isModalOpen}>
				<ClosedButton type="button" onClick={handleClose}>
					close
				</ClosedButton>
				{children}
			</StyledModal>
		</>
	);
};
export default Modal;
