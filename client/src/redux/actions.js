import axios from "axios"

export const postApplicantInfo = (password, email) => {
  return async dispatch => {
    try {

      const { data } = await axios.post("http://localhost:3001/signUp", {
        email,
        password,
      });

      dispatch({
        type: "ADD_DETAILS",
        payload: data
      });
    } catch (e) {
      console.log(e);
    }
  };
}