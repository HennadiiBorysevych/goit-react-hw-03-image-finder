import '../index.css';
import React from 'react';

import Searchbar from './search-bar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './LoadMoreBtn/Button';

import { Audio } from 'react-loader-spinner';

class App extends React.Component {
  state = {
    value: '',
    data: [],
    page: 1,
  };

  handleSubmit = value => {
    this.setState({ value });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.value}&page=1&key=33559977-5d8a81e40738ffd9c726fd9c1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response =>
          response.ok ? response.json() : Promise.reject(response)
        )
        .then(data => {
          this.setState({ data: data.hits });
        })
        .catch(error => console.log(error));
    } else if (prevState.page !== this.state.page) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=33559977-5d8a81e40738ffd9c726fd9c1&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response =>
          response.ok ? response.json() : Promise.reject(response)
        )
        .then(data => {
          this.setState(prevState => ({
            data: [...prevState.data, ...data.hits],
          }));
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <Audio />;
        <ImageGallery data={this.state.data} />
        {this.state.data.length > 0 ? (
          <Button handleLoadMore={this.handleLoadMore} />
        ) : null}
      </>
    );
  }
}
export default App;
