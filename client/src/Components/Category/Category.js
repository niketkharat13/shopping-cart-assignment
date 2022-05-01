import categoryCss from './css/category.module.css';
const Category = ({category, index, navigateToPLP}) => {
    const {name, description, imageUrl, key} = category;
    const imgElement = (
        <div className={categoryCss.category_img_div}>
            <img src={imageUrl} alt={name} className={categoryCss.category_img} />
        </div>
    );
    return (
        <div className={categoryCss.category_item}>
            {
                index%2 !== 0 && imgElement
            }
            <div className={categoryCss.category_details}>
                <h2>{name}</h2>
                <p>{description}</p>
               <div>
               <button 
                    className={categoryCss.explore_category_btn} 
                    onClick={() => navigateToPLP(category)}
                >
                    Explore {key}
                </button>
               </div>
            </div>
            {
                index%2 === 0 && imgElement
            }
        </div>
    )
}

export default Category;