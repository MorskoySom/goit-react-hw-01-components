import style from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (<div>
        <ul className={style.friendList}>
            {friends.map(friend => (
                <li className={style.item} key={friend.id}>
                    <span className={style.status} style={{ background: friend.isOnline ? "green" : "red" }}></span>
                    <img className={style.avatar} src={friend.avatar} alt="User avatar" />
                    <p className={style.name}>{friend.name}</p>
                </li>
            ))}
        </ul>

    </div>
    );
}
