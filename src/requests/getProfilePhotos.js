import api from "./api";

export default function getProfilePhotos() {
  api.get("/profile/getProfilePhotos").then((response) => {
    return response.data.data;
  });
}
