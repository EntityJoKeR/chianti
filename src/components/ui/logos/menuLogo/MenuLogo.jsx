import styles from "./MenuLogo.module.css"

const MenuLogo = () => {
    return (
        <div className={styles.container}>
            <img src="/menuLogo.svg"/>
        </div>
    );
};

export default MenuLogo;