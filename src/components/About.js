import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('parent constructor')
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About class component</h2>

        <div>
          Logged In User: 
        <UserContext.Consumer>
          {({loggedInUser})=>  <h1 className='text-xl font-bold'>{loggedInUser}   </h1>}
        </UserContext.Consumer>
        </div>
        {/* <UserClass name={'Harsh'} location={'Bikaner'}/> */}
        {/* <User /> */}
      </div>
    )
  }
}

export default About