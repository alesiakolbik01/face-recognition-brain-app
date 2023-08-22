import React from 'react';
import './Rank.css';

const Rank = ({ userData }) => {
    return (
         <div className="tc">
              {userData.name ?
                <React.Fragment>
                    <div className="white tx-sh f3">
                            { `${userData.name}, your current entry count is ...` }
                        </div>
                        <div className="white tx-sh f1">
                            { `#${userData.entries}` }
                        </div>
                </React.Fragment>
                :
                <div className="white tx-sh f3">Hello! Your data is loading...</div>
              }
        </div>
    )
}

export default Rank;