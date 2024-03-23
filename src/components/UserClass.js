import React, { Component } from 'react'

export default class UserClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: 'Name',
                location: 'Location'
            }
        }
        // console.log(this.props.name  + 'child constructor')
    }
    async componentDidMount() {
        const res = await fetch('https://api.github.com/users/harshvardhan9829');
        const json = await res.json();
        this.setState({
            userInfo: json
        })
        // console.log(this.props.name + 'componenet did mount child')
    }
    componentDidUpdate(){
        console.log('component did update')
    }


    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        // const {name, location} = this.props
        // const {count} = this.state;
        // console.log(this.props.name +'child render');
        return (
            <div className="user-card" style={{
                display: 'flex',
                alignItems:'center',
                gap:'50px',
                border:'1px solid grey',
                width:'fit-content',
                padding:'20px',
                borderRadius:'10px',
                background:'lightgrey '
                
            }}>
                <div className="logo" style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        overflow:'hidden'
                    }}>
                    <img src={avatar_url} alt="User avator" style={{
                        maxWidth: '100%',
                    }} />
                </div>
                <div className="details" >

                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                </div>
                {/* <h4>state in class - {this.state.count}</h4> */}
                {/* <button onClick={() => {
                    this.setState({
                        count:this.state.count + 1
                    })
                }}>Increase Count</button> */}
            </div>
        )
    }
}
