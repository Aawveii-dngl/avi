import React, { Component } from 'react'

export default class Error extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }

    componentDidCatch(e,info){
        this.setState({hasError:true})
    }
    
    render() {
        if(this.state.hasError)
        return (
            <div>
                <h1>This is not good</h1>  
            </div>
        )
        else{
            return this.props.children;
        }
    }
}
