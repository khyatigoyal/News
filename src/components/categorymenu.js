import React from 'react';
class CategoryMenu extends React.Component{
    handleclick =(category)=>{
        this.props.handleClick(category)
    }
    render(){

    return(
            <div className="ui container">
                <div className="ui inverted fixed top seven item massive menu">
            
                        <a onClick={()=>{this.handleclick("entertainment")}} className="item">
                        <i className="film large icon"/>
                        </a>
                        <a onClick={()=>{this.handleclick("general")}} className="item">
                        <i className="file large icon"></i>
                        </a>
                        <a onClick={()=>{this.handleclick("sports")}} className="item">
                        <i className="football ball large icon"></i>
                        
                        </a>
                        <a onClick={()=>{this.handleclick("science")}} className="item">
                        <i className="user md large icon"/>
                        </a>
                        <a onClick={()=>{this.handleclick("technology")}} className="item">
                        <i className="laptop large icon"/>
                        </a>
                        <a onClick={()=>{this.handleclick("health")}} className="item">
                        <i className="medkit large icon"></i>
                        </a>
                        <a onClick={()=>{this.handleclick("business")}} className="item">
                        <i className="chart line large icon"></i>
                        </a>
                        </div>         
                    </div>
    
        )
    }
}

export default CategoryMenu;