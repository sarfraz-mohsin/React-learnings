import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(){
        super()
        this.state = {
            message: 'hello'
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'goodbye'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBinding
