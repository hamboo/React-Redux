import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class UserDelete extends React.Component{
    
    constructor(props){
        super(props);
        this.modalDeteleHide = this.modalDeteleHide.bind(this);
        this.userDelete = this.userDelete.bind(this);
    }

    render()
    
    {
        
        console.log(this.props.modal_delete.username);
        return(
            <Modal show = {this.props.modal_delete.show }>
                <Modal.Header>
                    <Modal.Title>
                        Yakin Om !!  &nbsp;
                        <strong> Mau delete user ini !!! </strong> &nbsp;
                        <strong >{this.props.modal_delete.username}</strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick = {this.modalDeteleHide}>NO</Button>
                    <Button bsStyle = "primary" onClick = {this.userDelete}>YES</Button>
                </Modal.Footer>
            </Modal>
        );    
    }

    modalDeteleHide(event){
        
        this.props.dispatch({
            type: 'users.modalDeleteHide', 
           
        });
    }

    userDelete(event){
        // console.log(this.props.modal_delete);
        this.props.dispatch({
            type: 'users.delete',
            id : this.props.modal_delete.id,
        });

        this.props.dispatch({
            type: 'users.modalDeleteHide',
        });
    }

}

function mapStateToProps (state){
    let modal_delete;
    console.log("state nya", state);
    if (state.users.modal && state.users.modal.list_delete){
        modal_delete = state.users.modal.list_delete;
        // console.log(modal_delete.username);
    } else {
        modal_delete = {
            show: false,
            id: 0,
            username: '',
        }
    }
    return {
        modal_delete: modal_delete,
    }
    console.log("modal_delete",modal_delete);
}

export default connect(mapStateToProps)(UserDelete);