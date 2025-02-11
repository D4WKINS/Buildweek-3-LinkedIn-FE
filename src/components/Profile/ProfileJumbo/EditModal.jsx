import './EditModal.css';
import { Modal, Button } from 'react-bootstrap'
import { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import EditProfile from './EditProfile';
import pdf from "../../../Assets/PDF_file_icon.svg"

const {REACT_APP_BACKEND_URL} = process.env;
class EditModal extends Component{

        state={
            show:false,
            profileData:null,
            submitbtn:null
        }

        componentDidUpdate =(prevProps)=>{
            if(prevProps.profileData !== this.props.profileData){
                this.setState({
                    ...this.state,
                    profileData:this.props.profileData
                }) 
            }                                   
        }

        submit =(val)=>{
            this.setState({
                ...this.state,
                submitbtn:val
            })
        }

        handleClose =()=>{
            this.setState({
                ...this.state,
                show:false
            })
        }

        handleShow =()=>{
            this.setState({
                ...this.state,
                show:true
            })
        }

    render(){      

        return(

        <>     
            <svg id="editbtn" onClick={this.handleShow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
            </svg>     
           {/*  <FiEdit2 id="editbtn" onClick={this.handleShow} size={30}/>   */}              

            <Modal dialogClassName="my-modal" show={this.state.show} onHide={this.handleClose}>

                <Modal.Header className="edit-modal" closeButton>                
                            <Modal.Title>Edit intro</Modal.Title>
                                       
                </Modal.Header>
                <Modal.Body className="modal-Body mt-4">
                    <EditProfile profileData={this.state.profileData} editInfo={this.props.editInfo} submit={this.submit}/>               
                </Modal.Body>
                <Modal.Footer>
                <Button 
                className="badge-pill" 
                variant="outline-light" 
                type={Link} target="blank" href={`${REACT_APP_BACKEND_URL}/profile/60f67bd86bce175ba8dec1d7/pdf`}
                >
                 <img  src={pdf} alt="pdf-icon" id="pdf-icon" />               
                </Button> 

                </Modal.Footer>
            </Modal> 
        </>
    )
  }
}

export default withRouter(EditModal)
