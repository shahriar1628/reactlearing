import React, {Component} from 'react' 

class LoginForm extends Component {
    constructor(props) {
        super(props) ; 
        this.state = {
            userName : 'username' ,
            password :  'password'
        };
        this.handleChange = this.handleChange.bind(this) ; 
        this.handleSubmit = this.handleSubmit.bind(this) ; 
    };

    handleChange(event) {
       // alert('A name was submitted: ' + event.target.value);
       const name = event.target.name ; 
       const value = event.target.value ;
      this.setState( {
          [name] : value 
      }
      ) ;
    }; 

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.password);
        event.preventDefault();
      };

    render() {
        return (
            <form onSubmit = {this.handleSubmit} >
                <label>
                 Name:
                 <input type = "text" name = "userName" value = {this.state.userName} onChange = {this.handleChange} />
                </label> 
                <label>
                 Password:
                 <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange} />
                </label>
                <input type = "submit" value = "Submit" />
            </form>                  

        );

    };

}

 export default LoginForm ; 