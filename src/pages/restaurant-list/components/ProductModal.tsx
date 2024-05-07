import * as React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Quantity from './Quantity'


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#181818',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
}

const ProductModal = ({
    open,
    onClose,
    product,
    totalPrice,
    quantityOnChange
}) => {

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="child-modal-title">Produto</h2>
                <h3>{product.name}</h3>
                <p id="child-modal-description">
                    <span>R$ {totalPrice}</span>
                </p>
                <Quantity
                    onChange={quantityOnChange}
                />
                <Button onClick={onClose}>
                    Confirmar
                </Button>
            </Box>
        </Modal>
    )
}

export default ProductModal
