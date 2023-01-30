import React, { Component } from 'react'

class UncontrolledComp extends Component {
    constructor(props) {
        super(props);
        //khởi tạo các tham chiếu tới dom
        this.userNameRef = React.createRef();
        this.passRef = React.createRef();
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin = (event) => {
        event.preventDefault();
        //lấy dư liệu lưu trữ tỏng dom
        console.log('user name', this.userNameRef.current.value);
        console.log('pass', this.passRef.current.value);
    }
    render() {
        return (
            <div>
                <h2>Uncontrolled Form</h2>
                <form>
                    UserName: <input type={'text'} name='userName' id='userName' ref={this.userNameRef} /><br></br>
                    Password: <input type={'password'} name='pass' id='pass' ref={this.passRef} /><br></br>
                    <button onClick={this.handleLogin}>Login</button>
                </form>

            </div>
        )
    }
}
export default UncontrolledComp;
