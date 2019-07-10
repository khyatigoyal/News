import React from 'react';

class searchnews extends React.Component {
    state = {
        q : '',
        
    };
    handlechange = (event) => {
        this.setState({
            q : event.target.value,
        })
    };
    handlesubmit = (event) => {
        event.preventDefault();
        this.props.onformSubmit(this.state.q)
    }
    render(){
        return (
            <div className="search-bar ui container">
                <form className="ui form" onSubmit={this.handlesubmit}>
                    <div className="field">
                        <label>Search Query</label>
                        <input type="text" value={this.state.q} onChange={this.handlechange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default searchnews;