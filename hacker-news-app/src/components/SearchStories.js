import React, { Component } from 'react';
import Button from './Button';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';


class SearchStories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const { query } = this.state;
        if (query) {
            this.props.onFetchStories(query);
            this.setState({query: ''});
        }


    }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.onChange}
        />
        <Button type="submit">
            Search
        </Button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    onFetchStories: query => dispatch(doFetchStories(query)),
});

export default connect(null, mapDispatchToProps)(SearchStories);
