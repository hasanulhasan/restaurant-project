import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      rating: '',
      comment: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    console.log(this.state)
    e.preventDefault()

  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type='text'
            name='author'
            value={this.state.author}
            placeholder='your name'
            onChange={this.handleInputChange}
            required />
          <br />
          <Input
            type='select'
            name='rating'
            onChange={this.handleInputChange}
            value={this.state.rating}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          <br />
          <Input
            type='textarea'
            name='comment'
            value={this.state.comment}
            placeholder='Your comment'
            onChange={this.handleInputChange}
            required>
          </Input>
          <Button type='submit'>Submit</Button>
        </Form>

      </div >
    );
  }
}

export default CommentForm;