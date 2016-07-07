'use strict';

var CommentList = React.createClass({
    render: function() {
        return ( <div className = "commentList" >
            Hello, World, I am a CommentList. </div>
        );
    }
});


var CommentForm = React.createClass({
    render: function() {
        return ( <div className = "commentForm" >
            Hello, world!I am a CommentForm. </div>
        );
    }
});

ReactDOM.render(
  <CommentForm />,
  document.getElementById('content')
);

ReactDOM.render(
  <CommentList />,
  document.getElementById('content2')
);
