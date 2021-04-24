// import React, { Component, Fragment } from 'react';
import React, { useState, Fragment } from 'react';

const PhoneInfo = (props) => {
    const style = {
        border: '1px solid black',
        padding: '8px',
        margin: '8px',
    };
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(props.info.name);
    const [phone, setPhone] = useState(props.info.phone);
    const handleRemove = () => {
        const { info, onRemove } = props;
        onRemove(info.id);
    };
    const handleToggleEdit = () => {
        // true => false
        //onUpdate
        // false -> true
        //state에 info값 넣기
        const { info, onUpdate } = props;
        if (editing) onUpdate(info.id, { name: name, phone: phone });
          setEditing(pre => !pre);
        //   setEditing(!setEditing)
        
    };
    return (
        <div style={style}>
            {
                editing ? (
                    <Fragment>
                        <div><input
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        /></div>
                        <div><input
                            name="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        /></div>
                    </Fragment>
                ) : (
                    <Fragment>
                        <div><b>{name}</b></div>
                        <div><b>{phone}</b></div>
                    </Fragment>)
            }
            <button onClick={handleRemove}>삭제</button>
            <button onClick={handleToggleEdit}>
                {editing ? '적용' : '수정'}
            </button>
        </div>
    );
}
/*
class PhoneInfo extends Component {
    state = {
        editing: false,
        name: '',
        phone: ''

    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextProps) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    handleToggleEdit = () => {
        // true => false
        //onUpdate
        // false -> true
        //state에 info값 넣기
        const { info, onUpdate } = this.props;
        if (this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        } else {
            this.setState({
                name: info.name,
                phone: info.phone,
            });
        }
        this.setState({
            editing: !this.state.editing,
        });
    }
    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { name, phone, id } = this.props.info;
        const { editing } = this.state;
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };
        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div><input
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.name}
                            /></div>
                            <div><input
                                name="phone"
                                onChange={this.handleChange}
                                value={this.state.phone}
                            /></div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div><b>{phone}</b></div>
                        </Fragment>)
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    {editing ? '적용' : '수정'}
                </button>
            </div>
        );
    }
}
*/

// const checkProp = (pre, next) => pre === next;

// const arr = [1,2,3,4];
// const sqr = (v) => v * v;
// arr.map(sqr);

// export default React.memo(PhoneInfo, checkProp);
export default React.memo(PhoneInfo, (pre, next) => pre.info === next.info);