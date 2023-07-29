import api from "./api"

export default function getProfilePhotos() {

    return api.get("/profile/getProfilePhotos")
        .then((response) => {
            return response.data.data
        })
        .catch()
}