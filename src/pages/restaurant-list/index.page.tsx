import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ProductModal from './components/ProductModal'
import CheckoutModal from './components/CheckoutModal'

export default function NestedList() {
    const companies = [
        {
            name: 'Restaurante de Vó',
            products: [
                { name: 'marmita pequena', price: 15.0, image:"https://via.placeholder.com/150" },
                { name: 'marmita média', price: 20.0, image:"https://via.placeholder.com/150" },
                { name: 'marmita grande', price: 25.0, image:"https://via.placeholder.com/150" }
            ]
        },
        {
            name: 'Café Bistro',
            products: [
                { name: 'café Gelado', price: 10.0, image:"https://via.placeholder.com/150" },
                { name: 'pão de queijo', price: 5.0, image:"https://via.placeholder.com/150" },
                { name: 'suco de laranja', price: 10.0, image:"https://via.placeholder.com/150" }
            ]
        },
        {
            name: 'Só Filé',
            products: [
                { name: 'filé de frango', price: 10.0, image:"https://via.placeholder.com/150" },
                { name: 'file de tilapia', price: 10.0, image:"https://via.placeholder.com/150" },
                { name: 'file de magnolia', price: 10.0, image:"https://via.placeholder.com/150" }
            ]
        }
    ]

    const [itemsOpened, setItemsOpened] = React.useState(
        new Array(companies.length).fill(false)
    )
    const handleClickCompany = (index) => {
        const newItemsOpened = [...itemsOpened]
        newItemsOpened[index] = !newItemsOpened[index]
        setItemsOpened(newItemsOpened)
    }

    // select item
    const [itemSelected, setItemSelected] = React.useState({})

    const [modalProductOpen, setModalProductOpen] = React.useState(false)
    const handleOpenModalProduct = (item) => {
        setQuantitySelected(1)
        setItemSelected(item)
        setTotalPrice(item.price)
        setModalProductOpen(!modalProductOpen)
    }

    const [checkoutProducts, setCheckoutProducts] = React.useState([])

    const handleCloseModalProduct = () => {
        console.log(quantitySelected, itemSelected)

        const newCheckoutProduct = {
            quantity: quantitySelected,
            item: itemSelected
        }
        setCheckoutProducts([...checkoutProducts, newCheckoutProduct])

        console.log(checkoutProducts)

        setItemsQuantity(itemsQuantity+1)

        setQuantitySelected(0)
        setItemSelected({})
        setModalProductOpen(!modalProductOpen)
        setTotalPrice(0)
    }

    const [itemsQuantity, setItemsQuantity] = React.useState(0)
    const [quantitySelected, setQuantitySelected] = React.useState(0)

    const [totalPrice, setTotalPrice] = React.useState(0)
    const handleQuantityChange = (e, quantity) => {
        setQuantitySelected(quantity)
        setTotalPrice(itemSelected.price *  quantity)
    }

    // checkout
    const [modalCheckoutOpen, setModalCheckoutOpen] = React.useState(false)

    const handleOpenModalCheckout = () => {
        setModalCheckoutOpen(!modalCheckoutOpen)
    }

    const handleCloseModalCheckout = () => {
        setModalCheckoutOpen(!modalCheckoutOpen)
    }

    return (
        <div>
            <ProductModal
                open={modalProductOpen}
                onClose={handleCloseModalProduct}
                product={itemSelected}
                totalPrice={totalPrice}
                quantityOnChange={handleQuantityChange}
            />

            <CheckoutModal
                open={modalCheckoutOpen}
                onClose={handleCloseModalCheckout}
                checkoutProducts={checkoutProducts}
            />

            <List
                sx={{ width: '100%',
                    bgcolor: 'background.paper'
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                    >
                        Restaurantes
                    </ListSubheader>
                }
            >
                {companies.map((company, index) => (
                    <div key={index}>
                        <ListItemButton onClick={
                            () => handleClickCompany(index)
                        }>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={company.name} />
                            {itemsOpened[index] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse
                            in={itemsOpened[index]}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                {company.products.map((item, itemIndex) => (
                                    <ListItemButton
                                        key={itemIndex} sx={{ pl: 4 }}
                                    >
                                        <ListItemText
                                            primary={item.name}
                                            secondary={`R$ ${item.price}`}
                                        />
                                        <IconButton
                                            aria-label="delete"
                                            size="small"
                                            onClick={
                                                () => handleOpenModalProduct(item)
                                            }
                                        >
                                            <AddIcon fontSize="small" />
                                        </IconButton>
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>
                    </div>
                ))}
            </List>
            <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <Fab
                    variant="extended"
                    onClick={handleOpenModalCheckout}
                >
                    <ShoppingCartIcon sx={{ mr: 1 }} />
                    Carrinho {itemsQuantity}
                </Fab>
            </div>
        </div>
    )
}
