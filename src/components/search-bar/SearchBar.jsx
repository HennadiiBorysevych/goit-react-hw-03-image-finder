import React from 'react';
import clsx from 'clsx';

class Searchbar extends React.Component {
  handleInput = e => {
    e.preventDefault();
    this.props.onSubmit(e.target.elements[1].value);
  };

  render() {
    return (
      <header className={clsx('Searchbar')}>
        <form onSubmit={this.handleInput} className={clsx('SearchForm')}>
          <button type="submit" className={clsx('SearchForm-button')}>
            <span className={clsx('SearchForm-button-label')}>Search</span>
          </button>

          <input
            className={clsx('SearchForm-input')}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
