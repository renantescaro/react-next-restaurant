import * as React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}

const CheckoutModal = ({
    open,
    onClose,
}) => {

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="child-modal-title">Carrinho</h2>
                <p id="child-modal-description">
                   
                </p>
                <Button onClick={onClose}>
                    Confirmar
                </Button>
            </Box>
        </Modal>
    )
}

export default CheckoutModal
