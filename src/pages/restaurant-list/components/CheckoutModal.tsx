import * as React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

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
    checkoutProducts
}) => {

    console.log('recebido', checkoutProducts)

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <p id="child-modal-title" style={{textAlign:'center', fontSize:25}}>
                    Carrinho
                </p>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Itens adicionados
                        </ListSubheader>
                    }
                >
                    {checkoutProducts.map((product, index) => (
                    <ListItemButton>
                        <img
                            src={product.item.image}
                            alt="product"
                            style={{ width: 50, height: 50 , marginRight: 10}}
                        />
                        <div>
                            <ListItemText primary={product.item.name} />
                            <ListItemText primary={'R$ ' + product.item.price} />
                        </div>
                    </ListItemButton>
                    ))}
                </List>
                <div style={{marginTop: 20}}>
                    <Button onClick={onClose}>
                        Adicionar mais itens
                    </Button>
                </div>

                {/* Peça também */}
                {/* cupom */}
                

                <Button onClick={onClose} variant="contained">
                    Confirmar
                </Button>
            </Box>
        </Modal>
    )
}

export default CheckoutModal
