import React from 'react';
import Channel from '../apis/channel';
import SearchNews from './searchnews';
import NewsList from './newslist';
const apiKey ="c1a81ddb203a447fbb5303f075fd8c6b";
class ChannelDetail extends React.Component{
    state = {news : []};

    componentDidMount(){
        this.onformSubmit(this.props.channel.name);
        
    }
    
    onformSubmit = async (name) => {
        const response = await Channel.get('v2/everything',{
            params:{
                q:name,
                apiKey,

            }
        }
        );
        
        if(this.props.channel.id===response.data.articles.source.id){
        this.setState({
            news : response.data.articles,
        });
    }
    };
    render(){
        var {name}=this.props.channel;
        return(
            <div className="ui container">
            {()=>{this.onformSubmit(name)}}
                <SearchNews onformSubmit = {this.onformSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="sixteen wide column">
                            <NewsList News={this.state.news} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChannelDetail;
