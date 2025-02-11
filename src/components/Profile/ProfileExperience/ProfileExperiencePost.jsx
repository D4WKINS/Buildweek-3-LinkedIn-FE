import {Component} from "react";
import {Modal, Form, Row, Col, Button} from "react-bootstrap";
// import { ArrowsAngleExpand } from "react-bootstrap-icons";
const {REACT_APP_BACKEND_URL} = process.env;
export default class ProfileExperiencePost extends Component {
  state = {
    experience: {
      role: "",
      company: "",
      area: "",
      description: "",
      startDate: "",
      username:"rabztims",
      endDate: null,
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Gonna submit Exp now");
    console.log(this.state.experience);
    const userId = "60f67bd86bce175ba8dec1d7";
    const endpointPostExp = `${REACT_APP_BACKEND_URL}/profile/${userId}/experiences`;
    try {
      let response = await fetch(endpointPostExp, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.experience),
      });
      console.log(response.ok);
      if (response.ok) {
        alert("Experience saved!");
        this.setState({
          experience: {
            role: "",
            company: "",
            area: "",
            description: "",
            startDate: "",
            username:"rabztims",
            endDate: null,
          },
        });
        // let updateData = await putExpResponse.json();
        // console.log(updateData);
        // this.setState({ experience: updateData });
      } else {
        alert("We have another issue");
      }
    } catch (err) {
      console.log(err);
    }
  };
  inputChange = (e) => {
    let id = e.target.id;
    this.setState({
      experience: {...this.state.experience, [id]: e.target.value},
    });
  };

  render() {
    const {company, role, area, startDate, description} = this.state.experience;
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
              Add A New Experience
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    id="role"
                    type="text"
                    placeholder="What was your job title?"
                    value={role}
                    onChange={(e) => this.inputChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    id="company"
                    type="text"
                    placeholder="Enter Company Name"
                    value={company}
                    onChange={(e) => this.inputChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Date Started</Form.Label>
                  <Form.Control
                    id="startDate"
                    type="datetime-local"
                    value={startDate}
                    onChange={(e) => this.inputChange(e)}
                  />
                </Form.Group>
              </Row>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="description"
                  type="text"
                  placeholder="Describe your duties & role"
                  value={description}
                  onChange={(e) => this.inputChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  id="area"
                  type="text"
                  placeholder="Where is the company located"
                  value={area}
                  onChange={(e) => this.inputChange(e)}
                />
              </Form.Group>
              <Button variant="secondary">Reset Form</Button>
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
