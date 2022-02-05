import '../styles/ShoppingList.css';
import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import Category from './Category';
import {useState} from 'react'

function ShoppingList({cartList, setCartList, cartIsOpen, setCartIsOpen}) {
    const [activeCategories, setActivecategories] = useState([])

    function addToCart(name, price){
        const currentPlantAdded = cartList.find((plant)=>plant.name === name)
        if(currentPlantAdded){
            const allOtherItemsInCartList = cartList.filter((cartElement)=>
                cartElement.name !== name
            )
            setCartList([...allOtherItemsInCartList, {name, price, amount:currentPlantAdded.amount+1}])
        }else{
            setCartList([...cartList, {name:name, price:price, amount:1}]);
        }
        !cartIsOpen && setCartIsOpen(true)
    }

    function removeFromCart(name, price){
        const currentPlantAdded = cartList.find((plant)=>plant.name === name)
        if(currentPlantAdded){
            const allOtherItemsInCartList = cartList.filter((cartElement)=>
                cartElement.name !== name
            )
            currentPlantAdded.amount > 1 ?
                setCartList([...allOtherItemsInCartList, {name, price, amount:currentPlantAdded.amount-1}]):
                setCartList([...allOtherItemsInCartList])
        }else{
            alert(`${name} n'est pas dans votre panier`);
        }
    }
    
    return(<div className='shopping-list'>
        <Category activeCategories={activeCategories} setActivecategories={setActivecategories} />
        <ul className='plant-item-list'>
            {plantList.map(({name, category, id, light, water, cover, price, amount}) =>
            (activeCategories.length === 0 || activeCategories.includes(category)) &&
            <div key={id} className='plant-item-contener'>
                <PlantItem 
                    name={name}
                    category={category}
                    cover={cover}
                    price={price}
                />
                <div className='plant-item-buttons'>
                    <div 
                        className='add-to-cart-button' 
                        onClick={()=>addToCart(name, price)}>
                            ajouter
                    </div>
                    <div 
                        className='remove-from-cart-button' 
                        onClick={()=>removeFromCart(name, price)}>
                            retirer
                    </div>
                </div>
            </div>
            )}
        </ul>
        
    </div>);
}

export default ShoppingList;