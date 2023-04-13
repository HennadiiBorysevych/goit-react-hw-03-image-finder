import '../index.css';
import React from 'react';
import { fetchImages } from './api';
import { Searchbar, ImageGallery, Button, Modal } from './index';
import { MagnifyingGlass } from 'react-loader-spinner';

class App extends React.Component {
  state = {
    value: '',
    data: [],
    page: 1,
    isLoading: false,
    largeImageURL: '',
    modalOpen: false,
  };

  handleSubmit = value => {
    this.setState({ value });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({ isLoading: true });
      setTimeout(() => {
        fetchImages(this.state.value, 1)
          .then(data => {
            this.setState({ data, isLoading: false });
          })
          .catch(error => console.log(error));
      }, 2000);
    } else if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      fetchImages(this.state.value, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            data: [...prevState.data, ...data],
            isLoading: false,
          }));
        })
        .catch(error => console.log(error));
    }
  }
  handleModalClick = largeImageURL => {
    this.setState({ largeImageURL, modalOpen: true });
  };
  onModalClose = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading && (
          <MagnifyingGlass visible={true} glassColor="#c0efff" />
        )}
        <ImageGallery
          data={this.state.data}
          modalClick={this.handleModalClick}
        />
        {this.state.data.length > 0 ? (
          <Button handleLoadMore={this.handleLoadMore} />
        ) : null}
        {this.state.modalOpen && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            onClose={this.onModalClose}
          />
        )}
      </>
    );
  }
}
export default App;
