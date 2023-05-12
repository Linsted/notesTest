
import { useCallback, useEffect } from "react";
import { ModalStyled, ModalContentStyled, ModalTextStyled, ModalButtonStyled } from "./ModalWindow.styled";
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

export const ModalWindow = ({id, handleDelete,handleCancel}) => {

    
    const handleCloseByBackdrope = useCallback((event) => {
        if (event.target === event.currentTarget) handleCancel()
    }, [handleCancel]);

    useEffect(() => {
        window.addEventListener('click', handleCloseByBackdrope);

        return () => {
            window.removeEventListener('click', handleCloseByBackdrope);
        };

    }, [handleCloseByBackdrope]);
    
   
    
    return createPortal (
        
        <ModalStyled onClick ={handleCloseByBackdrope}>
                    <ModalContentStyled>
                        <ModalTextStyled>Are you sure you want to delete this note?</ModalTextStyled>
                        <ModalButtonStyled onClick={handleCancel}>Cancel</ModalButtonStyled>
                        <ModalButtonStyled onClick={()=> handleDelete(id)}>Delete</ModalButtonStyled>
                    </ModalContentStyled>
                </ModalStyled>,  document.querySelector("#modal-root")
        
    )
};

ModalWindow.propTypes = {
    id: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
};