import { Card, Col, Row, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import React, { Component } from "react";
import ProfileExpUpdater from "./ProfileExpUpdater";

export default class ProfileExperienceSingle extends Component {
  state = {
    showModalExpPut: false,
  };
  closeExpModalPut = () => {
    this.setState({ showModalExpPut: false });
  };
  render() {
    return (
      <>
        <hr className="mt-1 mb-2" />
        <Pencil
          id="editIcon"
          onClick={() => this.setState({ showModalExpPut: true })}
        />
        <Row id="expProfileSingle">
          <Col xs={2}>
            <Image src="https://i.pravatar.cc/300" />
          </Col>
          <Col xs={10}>
            <p>{this.props.role}</p>
            <p>{this.props.company}</p>
            <p>{this.props.date}</p>
            <p>{this.props.area}</p>
            <p>{this.props.desc}</p>
          </Col>
        </Row>
        <ProfileExpUpdater
          open={this.state.showModalExpPut}
          close={this.closeExpModalPut}
        />
      </>
    );
  }
}
