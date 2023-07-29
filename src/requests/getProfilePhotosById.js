import base from "./base"

export default function getProfilePhotosById(id) {

    base.get("/profile/getProfilePhotosById", {
        params: {
            id: id
        }
    })
        .then((response) => {
            return response.data.data
        })
        .catch()
}