import React, { Component } from 'react';



class FindUsers extends Component {
    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        console.log('this.inputName.value:' + this.inputName.value);
        event.preventDefault();
        console.log('this.inputName.value:' + this.inputName.value);
        this.props.onSubmit(this.inputName.value);
        this.inputName.value = '';

    }

    render() {
        var divStyle = {
            paddingLeft: '15px'
        };
        return (
            <form onSubmit={this.onSubmit} style={divStyle}>
                <div className="mdl-textfield mdl-js-textfield" >
                    <input className="mdl-textfield__input" placeholder="Please enter a user name to search..." type="text" ref={inputName => this.inputName = inputName} ></input>
                    <label className="mdl-textfield__label">Type the UserName then Click Enter</label>
                </div>
            </form >

        );
    }
}

export default FindUsers;
