import '../styles/Cart.css';

function Cart({cartList, setCartList, cartIsOpen, setCartIsOpen}) {

    const total = cartList.reduce(
        (acc, cartItem) =>
        acc = acc+cartItem.amount*cartItem.price,
        0
    )
    return (
        <div className='cart-contener'>
            {cartIsOpen ? 
                <div className='cart opened-cart'>
                    <h2>Panier</h2>
                    <p>v</p>
                    {cartList.length <= 0 ? 
                        'votre panier est vide' :
                        <div className='cart-set'>
                            <div className='cart-list'>
                                {cartList.map(
                                    ({name, price, amount}, index) =>
                                    <span key={`${name}-${index}`} className='cart-item'>
                                        {`${name} : ${price*100} Xaf x ${amount}`}
                                    </span>
                                )}
                            </div>
                            <div className='cart-total'>TOTAL : {total*100} Xaf</div>
                            <div className='reset-cart-button' onClick={()=>setCartList([])}>vider le panier</div>
                            <a href='https://wa.me/message/DSBSTZI4RLSNL1'><div className='cart-buying-button'>ACHETER</div></a>
                        </div>
                    }
                    <img className='set-cart-visibility-button close-cart-button' src='#' alt='panier(x)' title='fermer le panier' onClick={()=>setCartIsOpen(false)}/>

                </div>
            : <div className='cart closed-cart'>
                <img className='set-cart-visibility-button open-cart-button' src='#' alt='panier' title='panier' onClick={()=>setCartIsOpen(true)}/>
              </div>
            }
        </div>
    )
}

export default Cart;