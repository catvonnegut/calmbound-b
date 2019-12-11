import React, {Component} from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Vacation from './components/Products/Vacation/Vacation.jsx';
import Backhome from './components/Products/Backhome/Backhome.jsx';
import Holiday from './components/Products/Holiday/Holiday.jsx';
import SideMenu from './components/SideMenu/SideMenu';
import Backdrop from './components/Backdrop/Backdrop';
import DrawerToggleButton from './components/SideMenu/DrawerToggleButton';
import ContactForm from './components/ContactForm/ContactForm';
import Modal from './components/Modal/Modal.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
      modalOpen: false
    }
  }

    drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
    };

    modalToggleClickHandler = () => {
      this.setState((prevState) => {
        return {modalOpen: !prevState.modalOpen};
      });
    }

    backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
      this.setState({modalOpen: false});
    }

    render() {
      let sideMenu;
      let backdrop;
      let modal;

      if (this.state.sideDrawerOpen) {
        sideMenu = <SideMenu drawerClickHandler={this.drawerToggleClickHandler}/>;
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }

      if (this.state.modalOpen) {
        modal = <Modal modalToggleClickHandler={this.modalToggleClickHandler}/>;
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }

  return (
  <div>
  <Header
   drawerClickHandler={this.drawerToggleClickHandler}
   />
   {sideMenu}
   {backdrop}

    <div className="App">
      <Home />
      <Vacation
      modalToggleClickHandler={this.modalToggleClickHandler}
      name="vacation"
      line="Go ahead. Take a vacation."
      flavor1="smoked maple sea salt"
      flavor2="orange ganache"
      flavor3="sesame buttercups"
      />
      {modal}
      {backdrop}
      <Backhome
      modalToggleClickHandler={this.modalToggleClickHandler}
      name="vacation"
      line="Tastes as good as home feels."
      flavor1="cinnamon coffee cake"
      flavor2="chocolate cake"
      />
      <Holiday
      modalToggleClickHandler={this.modalToggleClickHandler}
      name="holiday"
      line="A seasonal take on our chocolates and cakes."
      flavor1="Gingerbread Coffee Cake"
      flavor2="Mint Mocha Ganache"
      />
      <ContactForm/>
      <Footer />

    </div>
  </div>
)
}
}

export default App;
