import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import './index.css';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment-row">{this.props.value}</div>
        );
    }
}

let CommentsWidget = createReactClass({
    getInitialState: function() {
        return {
            inputValue: ''
        };
    },

    render: function () {
        return (
            <div id="commentsWidget">
                <h1>Comments</h1>
                <div id="commentsWidgetList">
                    {this.renderSingleComment('First comment here')}
                </div>
                <form id="commentsWidgetForm" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea id="comment" placeholder="Type your comment"
                                  value={this.state.inputValue}
                                  onChange={this.updateInputValue}
                                  onKeyPress={this.handleKeyPress}/>
                    </div>
                    <div className="form-group submitGroup">
                        <span className="toggleSubmitHotKey" onClick={this.changeSubmitHotkey}>Press <strong className="hotkey">ctrl+enter</strong> to send</span>
                        <input type="submit" value="Post"/>
                    </div>
                </form>
            </div>
        );
    },

    changeSubmitHotkey: function (event) {

    },

    renderSingleComment: function (commentText) {
        return <Comment value={commentText} />;
    },

    updateInputValue: function(event) {
        this.setState({inputValue: event.target.value});
    },

    handleSubmit: function(event) {
        event.preventDefault();
        // console.log(this.state.inputValue);
        this.renderSingleComment(this.state.inputValue);
    },

    handleKeyPress(event) {
        if (event.charCode === 13) {
            this.handleSubmit(event);
        }
    }
});

// ========================================

ReactDOM.render(
    <CommentsWidget />,
    document.getElementById('root')
);
