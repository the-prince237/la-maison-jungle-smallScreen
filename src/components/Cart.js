import '../styles/Cart.css';
import {BsFillCartFill} from 'react-icons/bs';
import {BsCartX} from 'react-icons/bs';

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
                    <BsCartX color='#d22' size="2em" className='set-cart-visibility-button close-cart-button' alt='panier(x)' title='fermer le panier' onClick={()=>setCartIsOpen(false)}/>

                </div>
            : <div className='cart closed-cart'>
                <BsFillCartFill color='#31b572' size="2em" className='set-cart-visibility-button open-cart-button' alt='panier' title='panier' onClick={()=>setCartIsOpen(true)}/>
              </div>
            }
        </div>
    )
}

export default Cart;