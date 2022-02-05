import '../styles/PlantItem.css';

function PlantItem({ name, category, cover, price }) {
    return(
        <li className='plant-item'>
            <img className='plant-item-cover' src={cover} alt={`${name}-${category}`}/>
            <h3 className='plant-item-name'>{name.toUpperCase()}</h3>
            <span className='plant-item-price'>{price*100} Xaf</span>
        </li>
    );
}

export default PlantItem;