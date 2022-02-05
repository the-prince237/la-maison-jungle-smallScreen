import '../styles/Category.css';
import {plantList} from '../datas/plantList';
import {useState} from 'react';
import filter from '../assets/filter.jpg';

function Category({activeCategories, setActivecategories}) {
    const categoryList = plantList.reduce(
        (acc, plant) => 
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );

    const [avCatsIsOpen, setAvCatsIsOpen] = useState(false);

    function addCategory(cat){
        !activeCategories.includes(cat) && setActivecategories([...activeCategories, cat]);
    }

    function removeCategory(catRemoved) {
        const otherCats = activeCategories.filter((cat) =>
            catRemoved !== cat
        );
        setActivecategories([...otherCats]);
    }

    function availableCatsHandling(){
        avCatsIsOpen ? setAvCatsIsOpen(false) : setAvCatsIsOpen(true)
    }

    function resetCategories(){
        setActivecategories([]);
    }

    return(
        <div className='category'>
            {avCatsIsOpen &&
                <div className='available-categories'>
                    <div>{activeCategories.length < categoryList.length ? 'categories' : 'vide'}</div>
                {categoryList.map(
                            (cat) => 
                                !activeCategories.includes(cat) && <div onClick={() => addCategory(cat)}>{cat}</div>
                            
                        )}
                </div>
            }
            <div className='category-down-part'>
                <div className='active-categories'>
                    {activeCategories.map(
                        (cat) =>
                        <div className='active-category'>
                            {cat}
                            <span className='remove-category-button' onClick={() => removeCategory(cat)}>x</span>
                        </div>
                    )}
                </div>
                <div className='category-selection'>
                    <img onClick={availableCatsHandling} src={filter} alt='categories' className='category-filter-icon'/>
                    <span className='reset-categories-button' onClick={resetCategories} value='reinitialiser'>reinitialiser</span>
                </div>
            </div>
        </div>
    );
}

export default Category;