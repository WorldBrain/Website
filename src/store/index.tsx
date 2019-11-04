import React from 'react';
import Page from '../components/page';

class FirebaseProvider extends Page {
  constructor(props) {
    super(props);
    const { auth } = this.getServices();
    this.state = {
      firebase: auth.firebase,
      user: null
    }
  }

  componentDidMount = () => {
    const { firebase } = this.state;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user });
      } else {
        firebase.auth().signOut()
        this.setState({ user: null })
      }
    });
  }

  render() {
    const { auth } = this.getServices();

    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { auth, user: this.state.user })
    );
    return childrenWithProps;
  }
}

export default FirebaseProvider;