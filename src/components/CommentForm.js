import React, {Component, PropTypes} from 'react';

class CommentForm extends Component {
    state = {
        name: null,
        text: null
    };

    render() {
        return (
            <div>
                Name: <input type="text" onChange={this.handleChangeName} name="comment-name" />
                <br/>
                Comment: <input type="text" onChange={this.handleChangeText} name="comment-text"/>
                <br/>
                <button onClick={this.publishComment}>Publish</button>
            </div>
        );
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleChangeText = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    publishComment = (e) => {
        console.log('---', 'Name: ', this.state.name, ' Comment: ', this.state.text);
    }
}

export default CommentForm;
