import axios from 'axios';

const URL_SERV = "http://localhost:3004";

export const getposts = async (prevstate, page = 1, order = "asc", limit = "10") => {
    try {
        const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

        return {
            posts: prevstate.posts ? [...prevstate.posts, ...response.data] : response.data,
            page: page,
            end: response.data.length === 0 ? true : false
        }
    } catch (error) {
        throw error;
    }
}

export const addnewsletter = async (data) => {
    try {
        const findUser = await axios.get(`${URL_SERV}/newsletter?email=${data.email}`)

        if (!Array.isArray(findUser.data) || !findUser.data.length) {
            const response = await axios({
                method: 'POST',
                url: `${URL_SERV}/newsletter`,
                data: {
                    email: data.email
                }
            });

            return {
                newsletter: 'added',
                email: response.data
            }
        } else {
            return {
                newsletter: 'faild'
            }
        }

    } catch (error) {
        throw error;
    }


}
export const getPostById = async (id) => {
    try {
        const response = await axios.get(`${URL_SERV}/posts/${id}`)

        return response.data;
    } catch (error) {
        return "404"
    }
}
export const getClients = async () => {
    try {
        const response = await axios.get(`${URL_SERV}/clients`)
        return {clients: response.data};
    } catch (error) {
        return "404"
    }
}

export const sendmessage = async (data) => {
    try {
        const response = await axios({
            url: `${URL_SERV}/contact`,
            method: 'post',
            data: data
        });
        return true;
    } catch (error) {
        return false
    }
}