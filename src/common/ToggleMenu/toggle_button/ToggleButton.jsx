import styles from './ToggleButton.module.css'

const spanBars = [...Array(3)].map((_, index) => <span key={index} className={styles.bar}></span>)

export const ToggleButton = (props) => {
    return (
        <div className={`${styles.toggle} ${props.active ? styles.active : ''}`} id="toggle-button" onClick={props.onPress}>
            {spanBars}
        </div>
    )
}