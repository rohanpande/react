'use strict';

var CommentBox = React.createClass({
    displayName: 'CommentBox',
    render: function() {
        return (
            React.createElement('div', { className: "commentBox" }, "Hello, World! I am a Comment Box.")
        );
    }
});

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
);
