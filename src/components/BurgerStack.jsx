import '../App.jsx';

const BurgerStack = (props) => {
    return (
        <ul>
            {props.stack.map((ingredient, index) => {
                return (
                    <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name}
                        <button onClick={() => props.removeIngredient(index)}>X</button>
                    </li>
                )
            })
            }
        </ul>
    );
};

export default BurgerStack;