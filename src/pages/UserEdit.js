import React from 'react';
import { PageHeader, Form, FormGroup, Col, Button, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


class UserEdit extends React.Component 
{
    form_type ;
    constructor(props){
        super(props);
        this.form_type = (props.initila_Values.id > 0 ) ? 'edit' : 'add';
        console.log('this.form_type',this.form_type)
    }
    render(){
        return(
            <div>
                <PageHeader>
                    {'edit' === this.form_type ? 'User Edit' : 'User Add'}
                </PageHeader>
                <Form horizontal>
                    <Field name ="username" component ={UserEdit.renderUsername}/>
                    <Field name ="job" component ={UserEdit.renderJob}/>
                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button type ="submit" >Save User</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );

    }

    static renderUsername(props){
        console.log("renderUsername props",props);
        return(
            <FormGroup>
                <Col sm={2}> Username </Col>
                <Col sm = {8}>
                    <FormControl {...props.input} id="username" type="text" placeholder="Username"/>
                </Col>
            </FormGroup>
        );
    }

    static renderJob(props){
        return(
            <FormGroup>
                <Col sm={2}> Job </Col>
                <Col sm = {8}>
                    <InputGroup>
                        <FormControl {...props.input} id="job" type="text" placeholder="Job"/>
                        <InputGroup.Addon>
                            <Glyphicon glyph = "briefcase"/>
                        </InputGroup.Addon>
                    </InputGroup>
                </Col>
            </FormGroup>
        );
    }

}

UserEdit = reduxForm ({
    form:'user_edit',
}) (UserEdit);

function mapStateToProps(state, own_props) {
    // set the form data
    console.log ("state nya adalah",state)
    console.log ("own_props nya adalah",own_props)
    let form_data = {
        id: 0,
        username: '',
    };
    console.log ("form_data nya adalah",form_data)
    for(const user of state.users.list){
     //    console.log("user.id",user.id);
     //    console.log("own_props.user.id",own_props.params.id);
         if (user.id === Number (own_props.params.id)){
             form_data = user;
             break;
         }
    }
    console.log ("initila_Values nya adalah",form_data)
    return {
        initila_Values : form_data, 
    }
    console.log ("initila_Values nya adalah",initila_Values)
 }

export default connect(mapStateToProps)(UserEdit);