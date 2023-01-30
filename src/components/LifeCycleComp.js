import React, { Component } from 'react'

class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    componentWillMount() {
        console.log('component will mount');
    }
    // Thay đỏi props
    componentWillReceiveProps(nextProps){
        console.log('component will ReceiveProps-->', nextProps);
    }
    componentWillUpdate(){
        console.log('component will update');
    }
   componentDidUpdate(){
    console.log('component did update');
   }
   shouldComponentUpdate(){
    console.log('should coponent update');
    return true;
   }
    render() {
        console.log('component render');
        return (
            <div>

            </div>
        )
    }
    componentDidMount() {
        console.log('component did mount');
    }
}
export default LifeCycleComp;