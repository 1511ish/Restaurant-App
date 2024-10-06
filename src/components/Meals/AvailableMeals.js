import style from './AvailableMeals.module.css';
import Card from '../UI/Card/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Samosa',
        description: 'A traditional dish from North India that is made with a variety of ingredients.',
        price: '20'
    },
    {
        id: 'm2',
        name: 'Naan',
        description: 'A leavened, oven-baked flatbread that is often served with meals.',
        price: '21'
    },
    {
        id: 'm3',
        name: 'Palak paneer',
        description: 'A popular dish of cheese and spinach gravy that originated in North India',
        price: '12'
    }
]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
    return (
        <section className={style.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;