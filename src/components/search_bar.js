import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
  render() {
    return(
      <div className="search-bar">
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}
