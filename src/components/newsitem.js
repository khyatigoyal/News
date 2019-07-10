
import React from 'react';

const NewsItem = ({New}) => {
    return (
        <div>
            <div className="content">
                <div className="header" >
                    <h3>{New.title}</h3>
                    <p>{New.description}</p>
                    </div>
            </div>
        </div>
    );
}
export default NewsItem; 