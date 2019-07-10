import React from 'react';

const channelDetail =({channel})=>{
    return(
        <div>
           <h3> {channel.name}</h3>
           <p>{channel.description}</p>
        </div>
    )
}

export default channelDetail;