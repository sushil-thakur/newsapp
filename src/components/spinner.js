import React, { Component } from 'react'
import loading from 'E:\newsapp\src\loading.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default spinner



