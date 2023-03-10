import React, { Component } from 'react'
import Spinner from './Spinner-5.gif'
export class Loading extends Component {
    render() {
        return (
            <div>
              <img className='load' src={Spinner} alt="loading" />  
            </div>
        )
    }
}

export default Loading
