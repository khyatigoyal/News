import React from 'react';
import GirlReporter from '../reporter.png';
import MaleReporter from '../malereporter.png';
import Language from  '../language.png';
const channelDetail =({channel})=>{
    const  countryflag = channel.country + " flag";
    return(
        
        <div className="ui raised centered card">
  <div className="ui slide masked reveal image">
    <img alt="Loading..." src={GirlReporter} className="hidden content" />
    <img alt="Loading..." src={MaleReporter} className="visible content" />
  </div>
  <div className="content">
  <i className="right floated like icon"></i>
    <i className="right floated star icon"></i>
    <a href={channel.url} className="header">{channel.name}</a>
    <div className="meta">
      <span className="date">{channel.id}</span>
    </div>
    <div className="description">
      {channel.description}
    </div>
  </div>
  <div className="extra content">
    <div className="item">
        <a href={channel.url}>
      <i className="paper plane icon"></i>
      {channel.url}
    </a></div>
    <div className="item">
        <i className={countryflag}></i>
        {channel.country}
    </div>
    <div className="item">
        <img alt="..." className="ui mini image"src={Language} />
        {channel.language}
    </div>
  </div>
</div>

    )
}

export default channelDetail;