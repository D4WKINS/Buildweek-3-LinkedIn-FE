import {Component} from "react";
import {Modal, Form, Row, Col, Button} from "react-bootstrap";

const {REACT_APP_BACKEND_URL} = process.env;
export default class ProfileJumboUpdater extends Component {
  state = {user: {}};

  handleProfileUpdate = async (e) => {
    // const userId = "60c73bf1291930001560aba3";
    const endpointPUTprofile = `${REACT_APP_BACKEND_URL}/profile/`;

    try {
      let response = await fetch(endpointPUTprofile, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.user),
      });
      console.log(response.ok);
      if (response.ok) {
        alert("Profile Updated!");
        this.setState({
          user: {
            name: "",
            surname: "",
            area: "",
            bio: "",
            title: "",
            image: "",
          },
        });
      } else {
        alert(
          "We have some kind of issue, don't ask me - it's for you to solve"
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  inputChange = (e) => {
    let id = e.target.id;
    this.setState({
      user: {...this.state.user, [id]: e.target.value},
    });
  };

  render() {
    return (
      <>
        <Modal
          size="lg"
          show={this.props.open}
          onHide={this.props.close}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Update Profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.handleProfileUpdate(e)}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    id="name"
                    type="text"
                    placeholder={this.props.name}
                    onChange={(e) => this.inputChange(e)}
                    disabled
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    id="surname"
                    type="text"
                    placeholder={this.props.surname}
                    onChange={(e) => this.inputChange(e)}
                    disabled
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    id="bio"
                    type="text"
                    placeholder={this.props.bio}
                    onChange={(e) => this.inputChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    id="username"
                    type="text"
                    placeholder={this.props.username}
                    onChange={(e) => this.inputChange(e)}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Profile Pic</Form.Label>
                <Form.Control
                  id="image"
                  type="text"
                  placeholder={this.props.image}
                  onChange={(e) => this.inputChange(e)}
                />
              </Form.Group>
              <Button variant="secondary">Close</Button>
              <Button variant="primary" type="submit">
                Save changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
