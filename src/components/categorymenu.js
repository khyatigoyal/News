import React from 'react';
import Entertainment from '../entertainment.png';
import Science from '../science.png';
import Technology from '../technology.png';

class CategoryMenu extends React.Component{
    handleclick =(category)=>{
        this.props.handleClick(category)
    }
    render(){

    return(
        
            <div className="ui fixed top seven item compact inverted large menu">
            <div className="ui container">
                        <a onClick={()=>{this.handleclick("entertainment")}} className="item">
                        <img alt="..." src={Entertainment}/>
                        entertainment
                        </a>
                        <a onClick={()=>{this.handleclick("general")}} className="item">
                        <i className="file icon"></i>
                        general
                        </a>
                        <a onClick={()=>{this.handleclick("sports")}} className="item">
                        <i className="football ball icon"></i>
                        sports
                        </a>
                        <a onClick={()=>{this.handleclick("science")}} className="item">
                        <img alt="..." src={Science}/>
                        science
                        </a>
                        <a onClick={()=>{this.handleclick("technology")}} className="item">
                        <img alt="..." src={Technology}/>
                        technology
                        </a>
                        <a onClick={()=>{this.handleclick("health")}} className="item">
                        <i className="medkit icon"></i>
                        health
                        </a>
                        <a onClick={()=>{this.handleclick("business")}} className="item">
                        <i className="chart line icon"></i>
                        business
                        </a>
                 
        </div>
    </div>
        )
    }
}

export default CategoryMenu;