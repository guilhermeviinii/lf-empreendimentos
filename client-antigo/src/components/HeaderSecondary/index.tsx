import styles from './styles.module.scss'
export function HeaderSecondary({title}){
    return(
        <header className={styles.header}>
            <img src="/images/home/banner.png" alt=""/>
            <div>
                <span>{title}</span>
            </div>
        </header>
    )
}