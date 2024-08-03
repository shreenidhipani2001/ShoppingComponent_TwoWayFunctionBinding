import React from "react";
export default class TwoWayClassBinding extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            UserName:'Krrish'
        }
      //  this.handleUserChange=this.handleUserChange.bind(this)
    }
    
     handleUserChange(e){
        this.setState(
            { UserName:e.target.value}
        )
    }
    render(){
        return(
            <div className="container-fluid">
                
                <header className="row-2 bg-dark-subtle p-4 ">

                </header>
                <main className="row-9 bg-danger mt-2 p-2">
                    <h2>User Details</h2>
                     <input type="text"  onChange={this.handleUserChange.bind(this)} />
                     <br />
                     <p>
                        Hello {this.state.UserName}
                     </p>
                </main>

                <footer className="row-2 bg-gradient p-5" >
                    
                </footer>
            </div>
        )
    }
}