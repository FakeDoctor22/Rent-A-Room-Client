import axios from "axios";

const baseUrl = '/api/chats';

async function getChats() {
    return axios.get(baseUrl)
        .then((res) => res.data)
        .catch((error) => {
        throw error;
    });
}

async function createChat(chats) {
    return axios.post(baseUrl, chats).then((res) => res.data);
};

async function deleteChat(id) {
    return axios.delete(`${baseUrl}/${id}`).then((res) => res.status);
}


export default {
    getChats,
    createChat,
    deleteChat
};