//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import office from "./office.json";
import "./App.css";



//sets state to 0 or empty
class App extends Component {
  state = {
    office,
    clickedOffice: [],
    score: 0
  };

//when you click on a card ... the office cast is taken out of the array
  imageClick = event => {
    const currentOffice = event.target.alt;
    const OfficeAlreadyClicked =
      this.state.clickedOffice.indexOf(currentOffice) > -1;

//if you click on an image that has already been selected, the game is reset and cards reordered
    if (OfficeAlreadyClicked) {
      this.setState({
        office: this.state.office.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedOffice: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available office cast, your score is increased and cards reordered
    } else {
      this.setState(
        {
          office: this.state.office.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedOffice: this.state.clickedOffice.concat(
            currentOffice
          ),
          score: this.state.score + 1
        },
//if you get all 12 office corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              office: this.state.office.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedOffice: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.office.map(office => (
            <FriendCard
              imageClick={this.imageClick}
              id={office.id}
              key={office.id}
              image={office.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;



