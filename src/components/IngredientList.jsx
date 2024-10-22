// src/components/IngredientList.jsx
const IngredientList = ({Ingredients,addToStack}) => {
  return(
    <>
    <ul>

      {Ingredients.map((ingredient,index) => (
        <li key={index} style={{background: ingredient.color}}>
          {ingredient.name}
          <button onClick={() => addToStack(ingredient)}>+</button>
        </li>
      ))}

    </ul>
    
    </>
  ) 
  
};

export default IngredientList;
