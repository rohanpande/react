'use strict';

var CommentList = React.createClass({
  render:function(){
    return (
      <div className="commentList">
        <Comment author="Pete Hunt"> This is one comment </Comment>
        <Comment author="Jordan Walke"> This is *another* comment</Comment>
      </div>
    );
  }
});


var CommentForm = React.createClass({
  render : function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render:function(){
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var Comment = React.createClass({
  render : function() {
    var md = new Remarkable();
    return (
      <div className="comment">
      <h2  className="commentAuthor">
        {this.props.author}
      </h2>
        {md.render(this.props.children.toString())}
      </div>
    );
  }
});

var Comment = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html : rawMarkup };
  },
  render : function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
