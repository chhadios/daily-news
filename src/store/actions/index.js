import * as api from '../../api';
import {
    GET_POSTS,
    ADD_NEWSLETTER,
    CLEAR_NEWSLETTER,
    GET_POST_BY_ID,
    CLEAR_POST_BY_ID,
    SEND_MESSAGE,
    GET_CLIENTS
} from '../types';


export const getposts=(homeposts,page,order,limit)=>({
        type: GET_POSTS,
        payload: api.getposts(homeposts,page,order,limit)
    })


    export const getPostById =(id)=>({
        type: GET_POST_BY_ID,
        payload: api.getPostById(id)
    })
    export const getClients =()=>({
        type: GET_CLIENTS,
        payload: api.getClients()
    })

    export const clearPostById=()=>({
        type: CLEAR_POST_BY_ID,
        payload: {}
    })



    export const addnewsletter=(data)=>({
        type: ADD_NEWSLETTER,
        payload: api.addnewsletter(data)
    })
    export const sendmessage=(data)=>({
        type: SEND_MESSAGE,
        payload: api.sendmessage(data)
    })
    export const clearNewsletter =()=>({
        type: CLEAR_NEWSLETTER,
        payload: {
            newsletter: false,
            email:[]
        }
    })