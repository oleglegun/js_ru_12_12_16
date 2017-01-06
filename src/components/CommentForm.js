import React, {Component, PropTypes} from 'react';

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name: <input type="text" onChange={this.handleChange('user')} value={this.state.user}/>
                <br/>
                Comment: <input type="text" onChange={this.handleChange('text')}  value={this.state.text}/>
                <br/>
                <button type="submit">Publish</button>
            </form>
        );
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        });
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log('---', 'Name: ', this.state.user, ' Comment: ', this.state.text);
        this.setState({
            user: '',
            text: ''
        })
    }
}

export default CommentForm;
