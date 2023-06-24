const baseUrl = 'https://rent-a-room-app.onrender.com/api/chats';

async function getChats() {
    return fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => data);
};

async function createChat(chats) {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(chats),
    })
        .then((res) => res.json())
        .then((data) => data);
};

async function deleteChat(id) {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    })
        .then((res) => res.status);
}

export default {
    getChats,
    createChat,
    deleteChat
};