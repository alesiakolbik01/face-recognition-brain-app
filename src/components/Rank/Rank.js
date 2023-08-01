import './Rank.css';

const Rank = ({ userData }) => {
    return (
       <div className="tc">
            <div className="white tx-sh f3">
                { `${userData.name}, your current rank is ...` }
            </div>
            <div className="white tx-sh f1">
                { `#${userData.entries}` }
            </div>
       </div>
    )
}

export default Rank;