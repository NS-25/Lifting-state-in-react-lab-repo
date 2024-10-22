// `src/components/BurgerStack.jsx`
const BurgerStack = ({stack, removeIngredient}) => {
  return (
    <>
    <ul>
      {stack.map((ingredient,index) => (
        <li key={index} style={{background: ingredient.color}}>
          {ingredient.name}
          <button onClick={() => removeIngredient(index)}>X</button>
        </li>
      ))}
    </ul>
    </>
  )
};

export default BurgerStack;
