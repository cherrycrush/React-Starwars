import React from 'react'
import testData from '../../data/testdata.json'


class welcomeCard extends React.Component {
  render() {
    return <h1 className="heading">Hello, {testData.name}</h1>
  }
}

export default welcomeCard