import style from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
    return <table className={style.transactionHistory}>
        <thead>
            <tr className={style.head}>
                <th className={style.headItem}>Type</th>
                <th className={style.headItem}>Amount</th>
                <th className={style.headItem}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (
                <tr key={item.id} className={style.eachItem} style={{ background: item.type === `invoice` ? "rgba(12, 238, 80, 0.4)" : item.type === `payment` ? "rgba(229, 255, 0, 0.4)" : item.type === `withdrawal` ? "rgba(238, 12, 12, 0.4)" : "rgba(77, 64, 248, 0.4)" }}>
                    <td className={style.itemType}>{item.type}</td>
                    <td className={style.itemPart}>{item.amount}</td>
                    <td className={style.itemPart}>{item.currency}</td>
                </tr>
            ))}

        </tbody>
    </table>
}
