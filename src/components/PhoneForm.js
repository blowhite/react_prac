//rcc 입력하면 클래스 rsc 입력하면 함수
import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: '',
    }

    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name"
                    onChange={this.handlechange}
                    value={this.state.name}
                    placeholder="이름" />

                <input name="phone"
                    onChange={this.handlechange}
                    value={this.state.phone}
                    placeholder="전화번호" />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;