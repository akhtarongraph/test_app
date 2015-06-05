// var Post = React.createClass({
//   propTypes: {
//     title: React.PropTypes.string,
//     body: React.PropTypes.string,
//     published: React.PropTypes.bool,
//     publishedBy: React.PropTypes.instanceOf(Person)
//   },

//   render: function() {
//     return (
//       <div>
//         <div>Title: {this.props.title}</div>
//         <div>Body: {this.props.body}</div>
//         <div>Published: {this.props.published}</div>
//         <div>Published By: {this.props.published_by}</div>
//       </div>
//     );
//   }
// });


// var HelloMessage = React.createClass({
//   render: function() {
//     return <div>Hello {this.props.name}</div>;
//   }
// });


// var Timer = React.createClass({
//   getInitialState: function() {
//     return {secondsElapsed: 0};
//   },
//   tick: function() {
//     this.setState({secondsElapsed: this.state.secondsElapsed + 1});
//   },
//   componentDidMount: function() {
//     this.interval = setInterval(this.tick, 1000);
//   },
//   componentWillUnmount: function() {
//     clearInterval(this.interval);
//   },
//   render: function() {
//     return (
//       <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
//     );
//   }
// });



// var TodoListITEM = React.createClass({
//   render: function() {
//     var createItem = function(itemText, index) {
//       return <li key={index + itemText}>{itemText}</li>;
//     };
//     return <ul>{this.props.items.map(createItem)}</ul>;
//   }
// });

// var TodoApp = React.createClass({
//   getInitialState: function() {
//     return {items: [], text: ''};
//   },
//   onChange: function(e) {
//     this.setState({text: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var nextItems = this.state.items.concat([this.state.text]);
//     console.log(nextItems);
//     var nextText = '';
//     this.setState({items: nextItems, text: nextText});
//   },
//   render: function() {
//     return (
//       <div>
//         <h3>TODO</h3>
//         <TodoListITEM items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.onChange} value={this.state.text} />
//           <button>{'Add #' + (this.state.items.length + 1)}</button>
//         </form>
//       </div>
//     );
//   }
// });

var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.children} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var AuthorText = React.createClass({
  render: function() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});


var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var user_name = React.findDOMNode(this.refs.user_name).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    if ( user_name == "akhtar" && password == "password") {
      alert("hello " + user_name);
      return;
    }else{
      alert("you are unauthorized person Mr. " + user_name);
      React.findDOMNode(this.refs.user_name).value = '';
      React.findDOMNode(this.refs.password).value = '';
      return;
      
    }
    // TODO: send request to the server
  },
  render: function() {
    return (
      <div className="formData">
        
        <form className="commentForm" onSubmit={this.handleSubmit}>

          <input type="text" placeholder="user_name" ref="user_name" />
          <input type="text" placeholder="password" ref="password" />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});