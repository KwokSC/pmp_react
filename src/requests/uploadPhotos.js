import api from "../requests/api";

export default function uploadPhotos(photos) {
  api
    .post("/profile/uploadPhotos", photos)
    .then((response) => {})
    .catch();
}
