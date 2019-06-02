import React from 'react';
import logo from './logo.svg';
import './App.css';
import Markdown from 'markdown-to-jsx';

function Editor(props) {
  return (
    <textarea 
      id='textarea'
      className='text'
      type='text'
      onChange={props.handleChange}
      value={placeholder}
    />
  );
}

class Preview extends React.Component{
  render(){
    return(
      <Markdown
      className={this.props.className}
      >
        {this.props.markdown}
      </Markdown>
    );
  }
}

class ToolBar extends React.Component {
  render(){
    return(
      <div
      className='toolbar-div'
      id={this.props.name}
      >
        {this.props.name}
      </div>
    );
  }
}

class NavigationBar extends React.Component{
  render(){
    return(
      <div 
      className={this.props.className}>
        <h1>Markdown Previewer</h1>
      </div>
    );
  }
}

class Content extends React.Component{
  render(){
    return(
      <div
      className={this.props.className}>
        <ToolBar
        name='Editor'
        />
        <Editor
        className='editor'
        handleChange={this.props.handleChange}
        />
        <ToolBar
        name='Preview'
        />
        <Preview
        className='preview'
        markdown={this.props.markdown}
        />
      </div>
    );
  }
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      markdown:placeholder,
    }
  }

  handleChange(){
    this.setState({
      markdown:document.getElementById('textarea').value,
    });
  }

  render (){
    return (
      <div
      className='App'>
        <NavigationBar
        className='nav-bar'
        />
        <Content
        className='content-div'
        markdown={this.state.markdown}
        handleChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

const placeholder = 
`# Welcome to my React Markdown Previewer!

## Live editing will be provided very soon
### Until then paste your markdown text below:
`

export default App;
