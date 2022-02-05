import React from 'react';
import Cart from './Cart'
import ShoppingList from './ShoppingList';
import {useState} from 'react';

function Layout() {

    const [cartList, setCartList] = useState([])
    const [cartIsOpen, setCartIsOpen] = useState(false)

    return(
        <React.Fragment>
            <ShoppingList cartList={cartList} setCartList={setCartList} cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
            <Cart cartList={cartList} setCartList={setCartList} cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
        </React.Fragment>
    );
}

export default Layout;