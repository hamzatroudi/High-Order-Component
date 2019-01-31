import React, { Component } from 'react';
import './loaderhoc.css';


const LoaderHoc = (WrappedComponent)=>{
    return class LoaderHoc extends Component{
        render(){

           return this.props.isloading==true ? <div><p className="ploader" >LOADING... </p><div className="loader"></div></div>
            : <WrappedComponent  {...this.props} />
 



        }
    }







}
export default LoaderHoc;
