import React, { Component } from 'react'

class ControlledComp extends Component {
    constructor(props) {
        super(props);
        // khởi tạo state lưu trữ giữ liệu form
        this.state = {
            studentId: "",
            studentName: "",
            pass: "",
            gender: "",
            age: 0,
            address: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        //set state
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('studentId---', this.state.studentId);
        console.log('studentName---', this.state.studentName);
        console.log('gender---', this.state.gender);
        console.log('Address---', this.state.address);
    }
    render() {
        return (
            <div>
                <h2>Controlled Form</h2>
                <form>
                    studentId: <input type={'text'} name="studentId" id="studentIđ" onChange={this.handleChange} /><br></br>
                    studentName :  <input type={'text'} name="studentName" id="studentName" onChange={this.handleChange} /><br></br>
                    Password:  <input type={'password'} name="pass" id="pass" onChange={this.handleChange} /><br></br>
                    Gender : <input type={'checkbox'} name={'gender'} id='male' value={true} onChange={this.handleChange} /><label htmlfor='male'>Male</label>
                    <input type={'checkbox'} name={'gender'} id='female' value={false} onChange={this.handleChange} /><label htmlfor='female'>Female</label><br></br>
                    Age: <input type={'number'} name='age' id='age' onChange={this.handleChange} /><br></br>
                    Address: <select name='address' id='address' onChange={this.handleChange}>
                        <option value={'HN'}>Hà Nội</option>
                        <option value={'DN'}>Đà Nẵng</option>
                        <option value={'HCM'}>Hồ Chí Minh</option>
                    </select><br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default ControlledComp;
