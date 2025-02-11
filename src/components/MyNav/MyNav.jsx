import { Component } from "react";
import SearchDropDown from "./SearchResults/DropDown.jsx";
import React from "react";

import "./MyNav.css";

import {
  HouseDoorFill,
  PeopleFill,
  BagDashFill,
  ChatDotsFill,
  BellFill,
  Search,
  Grid3x3GapFill,
} from "react-bootstrap-icons";

import { Avatar } from "@material-ui/core";

import myPic from "../MyNav/myPic.jpg";

import "./MyNavOptions.css";

import linkedin from "./linkedin.png";

import { Link, withRouter } from "react-router-dom";

// import MyNavOptions from "./MyNavOptions";
// import myPic from "../MyNav/myPic.jpg";
import { InputGroup, Form, FormControl } from "react-bootstrap";

class MyNav extends React.Component {
  container = React.createRef();
  state ={
    query: "",
    profiles: [],
    dropOpen: false,
  }

  fetchProfiles = async () =>{
  try{
      let request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/profile?=${this.state.query}}`)
      let response = await request.json()
      let filtered = response.filter(doc=>doc.name.toLowerCase().includes(this.state.query.toLowerCase()))

        console.log(filtered)
      
        this.setState({profiles: [...filtered]})
        console.log(this.state.profiles)
        console.log(this.state.profiles.length)

    }catch(e){
      console.error(`We have a problem ${e}`)
    }
  }

  handleSearchQuery(e){
    let query = e.target.value;
    console.log(query)
    if(query.length > 2){
        this.setState({query: e.target.value})
          this.fetchProfiles() 
      }
    }

    showDropDown(){
      this.setState({dropOpen: !this.state.dropOpen})
    }

    handleClickOutside = (event) => {
      if (
        this.container.current &&
        !this.container.current.contains(event.target)
      ) {
        this.setState({
          dropOpen: false,
        });
      }
    };
  
  componentDidMount= async() =>{
    document.addEventListener("mousedown", this.handleClickOutside);
    this.fetchProfiles()
  }
  // componentDidupdate = () =>{
  //   if(this.state.query > 2){
  //     this.fetchProfiles()
  //   }
  // }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div className="header">
        <div className="headerLeft">
          <img src={linkedin} alt="logo" />
          <div className="headerSearch" style={{position:"relative"}}>
            {/* <Search /> */}
            <Form
              className="mt-2"
              // onSubmit={() =>
              // this.props.history.push(`/profile/${this.props.query}`)
              // }
            >
              <InputGroup style={{position:"relative"}}  ref={this.container}>
                {/* <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i id="search-icon" class="bi bi-search"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend> */}
                <FormControl
                  type="text"
                  id="search"
                  autoComplete="off"
                  // placeholder={this.props.user.id}
                  // value={this.props.user.id}
                 onChange={(e)=> this.handleSearchQuery(e)}
                 onClick={(e)=>this.showDropDown(e)}
                
                />
                 {this.state.dropOpen && <SearchDropDown profiles={this.state.profiles}/>}
              </InputGroup>
              
  
               {/* {this.state.profiles.length !== 0 && <searchDropDown profiles={this.state.profiles} /> } */}
            </Form>
          
          </div>
        </div>
        <div className="headerRight">
          <div className="myNavOptions">
            <HouseDoorFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href="/home">
              Home
            </a>
          </div>

          <div className="myNavOptions">
            <PeopleFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href="/network">
              My Network
            </a>
          </div>
          <div className="myNavOptions">
            <BagDashFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href="/Jobs}">
              Jobs
            </a>
          </div>
          <div className="myNavOptions">
            <ChatDotsFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href={"/Messaging"}>
              Messaging
            </a>
          </div>
          <div className="myNavOptions">
            <BellFill className="myNavOptionsIcon" />
            <a className="myNavOptionsTitle" href="/Notifications">
              Notifications
            </a>
          </div>
          <div className="myNavOptions">
           {/*  <Avatar src={myPic}  /> */}
            <a className="myNavOptionsTitle d-flex flex-column" href="/profile/60f67bd86bce175ba8dec1d7">
            <div>
            <img src={this.props.user && this.props.user.image} className="rounded-circle" style={{ height: "30px", width: "30px" }} alt="user pic" />
              
            </div>
              <span>
              Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </a>
          </div>

          <div
            className="myNavOptions"
            style={{ borderLeft: "1px solid gray " }}
          >
            <Grid3x3GapFill
              className="myNavOptionsIcon"
              style={{ marginLeft: "15px" }}
            />
            <a
              className="myNavOptionsTitle"
              href="/work"
              style={{ marginLeft: "15px" }}
            >
              Work{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MyNav);
