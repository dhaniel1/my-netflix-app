import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export default instance;

export async function postJSON(
  data: { [key: string]: any },
  navigate: () => void
) {
  const url = "https://api.medixab.net/api/v1/Account/authenticate";
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.data.succeeded) {
      localStorage.setItem("key", JSON.stringify(data));
      toast.success("Login Successfull");
      navigate();
      console.log("Success: ", response.data.succeeded);
    }
  } catch (error: any) {
    console.log(error.response.data.message);
    toast.error(error.response.data.message);
    return;
  }
}
