import api from "./api"

export default function getProfileById(id) {

    return api.get("/profile/getProfileById", {
        params: {
            id: id
        }
    })
        .then((response) => {
            return response.data.data
        })
        .catch()
}