import style from "./Profile.module.css"

export const Profile = (props) => {
    const username = props.username;
    const tag = props.tag;
    const location = props.location;
    const avatar = props.avatar;
    const stats = props.stats;
    return <div className={style.container}>
        <div className={style.profile}>
            <img
                src={avatar}
                alt="User avatar"
                className={style.avatar}
            />
            <p className={style.titleName}>{username}</p>
            <p className={style.label}>{tag}</p>
            <p className={style.label}>{location}</p>
        </div>
        <ul className={style.stats}>
            <li className={style.statsItem}>
                <span className={style.label}>Followers</span>
                <span className={style.quantity}>{stats.followers}</span>
            </li>
            <li className={style.statsItem}>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{stats.views}</span>
            </li>
            <li className={style.statsItem}>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div >
}
