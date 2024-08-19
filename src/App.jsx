import { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addIngredient = (newIngredient) => {
    setStack([...stack, newIngredient]);
  };

  const removeIngredient = (index) => {
    const newStack = [...stack];
    newStack.splice(index, 1);
    setStack(newStack);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <div style={{ float: 'left', width: '50%' }}>
          <h2>Available Ingredients</h2>
          <IngredientList ingredients={availableIngredients} addToBurger={addIngredient} />
        </div>
        <div style={{ float: 'right', width: '50%' }}>
          <h2>My Burger Stack</h2>
          <BurgerStack ingredients={stack} removeFromBurger={removeIngredient} />
        </div>
      </section>
    </main>
  );
};

export default App;
