import React from 'react'
import User from './User'
import UserClass from './UserClass'

// const About = () => {
//   return (
//     <div>
//         <h1>About</h1>

//         <UserClass />
//     </div>
//   )
// }
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('parent constructor')
  }

  componentDidMount(){
    // console.log('componenet did mount parent')
  }
  render() {
    // console.log('parent render')
    return (
      <div>
        <h1>About</h1>
        <h2>This is About class component</h2>
        {/* <UserClass name={'Harsh'} location={'Bikaner'}/> */}
        <User />
      </div>
    )
  }
}

export default About