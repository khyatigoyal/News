import React from 'react';
import NewsItem from './newsitem';

const NewsList =({News}) =>{
    const renderedList = News.map((New) => {
        return  ( 
        <NewsItem key={New.source.id}  New={New}/>
        );    

   });
    return (
        <div className="ui relaxed divider list" > 
           {renderedList}
        </div>
    )
}

export default NewsList;