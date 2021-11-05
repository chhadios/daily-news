import React,{useRef,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Form,Button}from 'react-bootstrap';
import {addnewsletter,clearNewsletter} from '../../store/actions'
import { showToast } from './tools';
const NewsLetter=()=>{

    const userData=useSelector(state=>state.user);
    const dispatch=useDispatch();
    const textInput=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const value=textInput.current.value;
        dispatch(addnewsletter({email:value}))
    }

    useEffect(()=>{
        if(userData.newsletter){
                if(userData.newsletter==="added"){
                    showToast('SUCCESS',"thank you for subscribing !!!");
                    textInput.current.value="";
                    dispatch(clearNewsletter())
                }
                else{
                    showToast('ERROR',"already on the data base !!!");
                    textInput.current.value="";
                    dispatch(clearNewsletter())
                }
        }

    },[userData]);

        return(
            <>
            <div className="newsletter_container">
                <h1>join our newsletter</h1>
                <div className="form">
                    <Form onSubmit={handleSubmit} className="mt-4">
                    <Form.Group>
                        <Form.Control type="text"
                         placeholder="Example=abhi.gmail.com"
                         name="email"
                         ref={textInput}/>
                    </Form.Group>
                    <Button variant="light" type="submit"
                    className="btn">
                        Add me to the list
                    </Button>
                    </Form>
                </div>
            </div>

            </>
        )
}

export default NewsLetter