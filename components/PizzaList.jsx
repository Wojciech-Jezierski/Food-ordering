import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eveniet repudiandae, voluptatem aperiam porro suscipit placeat cum accusantium cumque tempora, veniam magnam? Beatae corporis molestias odit sequi ex ullam laudantium.
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
};

export default PizzaList;