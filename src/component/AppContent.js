import * as React from 'react';


import { request, setAuthHeader } from '../helpers/axios_helper.js';

import AuthContent from './AuthContent.js';
import LoginForm from './AdminLogin.js';

export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome"
        }
    };
    login = () => {
        this.setState({componentToShow: "login"})
    };
    onLogin = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                email: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({componentToShow: "messages"});
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({componentToShow: "welcome"})
            }
        );
    };
    render() {
        return (
          <>
    
            {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin}  />}
            {this.state.componentToShow === "messages" && <AuthContent />}
    
          </>
        );
      };
}