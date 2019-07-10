
import React from 'react';
import Channeltv from '../pngtree-tv-head.png';
const channelItem = ({channel, onChannelSelect}) => {
    return (
        <div className="violet raised card" onClick={()=>onChannelSelect(channel)}>
        
            <div className="content">
            <img className="right floated mini ui circular image" alt="..." src={Channeltv}/>
                <a className="header">
                    {channel.name}
                </a>
                <div className="meta">
                    {channel.id}
                </div>
            </div>
        </div>
    );
}
export default channelItem; 