import instance from "../../utils/instance";

export const getPeopleApi = page =>
  instance
    .get(`/people`, {
      params: {
        page: page + 1
      }
    })
    .then(response => response.data);
