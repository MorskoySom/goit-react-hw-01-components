import style from "./Statistics.module.css"

export const Statistics = ({ title, stats }) => {
    return (<div>
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}
            <ul className={style.statList}>
                {stats.map(stat => (
                    <li className={style.item} key={stat.id}>
                        <span className={style.label}>{stat.label}</span>
                        <span className={style.percentage}>{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    </div>
    );
}

// { title && <h2 className={style.title}>{title}</h2> }
{/* <h2 className={style.title}>{title ? `${title}` : ``}</h2> */ }