/* eslint-disable default-case */
/* eslint-disable no-undef */
import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from "./modules/auth";
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import { Button, Container, Image } from "semantic-ui-react";
import Containers from "./components/Container";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  onLogin = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin, performanceDataIndex;

    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <h1>Log in to register your results</h1>
            <Button
              color="red"
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </Button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="message">
            Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </p>
        );

        performanceDataIndex = (
          <button
            id="show-index"
            onClick={() => this.setState({ renderIndex: true })}
          >
            Show past entries
          </button>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <button onClick={() => this.setState({ renderIndex: false })}>
                Hide past entries
              </button>
            </>
          );
        } else {
          performanceDataIndex = (
            <button
              id="show-index"
              onClick={() => this.setState({ renderIndex: true })}
            >
              Show past entries
            </button>
          );
        }
    }
    // break;
    // default:
    // break;
    return (
      <>
        {!renderLoginForm && !authenticated && (
          <div
            className="hello"
            style={{
              background: 'url("./data/images/slussen.jpeg")',
              backgroundSize: "cover",
              height: "120vh",
            }}
          >
            <Container id="main_container">
              <Containers>{renderLogin}</Containers>
            </Container>
          </div>
        )}
        <Container id="main_container">
          <Containers>{renderLogin}</Containers>
          {authenticated && (
            <>
              <InputFields onChangeHandler={this.onChangeHandler} />
              <DisplayCooperResult
                distance={this.state.distance}
                gender={this.state.gender}
                age={this.state.age}
                authenticated={this.state.authenticated}
                entrySaved={this.state.entrySaved}
                entryHandler={() =>
                  this.setState({ entrySaved: true, updateIndex: true })
                }
              />
            </>
          )}
          {performanceDataIndex}
        </Container>
      </>
    );
  }
}
export default App;
