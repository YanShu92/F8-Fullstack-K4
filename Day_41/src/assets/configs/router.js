import { client } from "./client";
import { toast } from "react-toastify";

export const getApiKey = async () => {
  var email = prompt("Please enter your email:?", "example@example.com");
  const pattern = /((?:[\w\.-]{3,})@(?:[\w\.-]{1,}\.[a-z]{2,}))/gi;
  if (email.match(pattern)) {
    var emailPath = email.replace(/@/g, "%40");
    console.log(emailPath);
    const url = `/api-key?email=${emailPath}`;
    //  handleStateUpdateLoading(true);
    console.log(url);
    const { data } = await client.get(url);
    console.log(data);
    if (data.code === 200) {
      const { apiKey } = data.data;
      client.setApi = apiKey;
      document.cookie = `apiKey=${apiKey}`;
      document.cookie = `email=${email}`;
      //     getList(getApiKeyCookie()).then((data) => {
      //          if (data.code === 200) {
      //               toast.success(`chào mừng bạn: ${email}`)

      //          }
      //     })
    } else {
      toast.error("email không tồn tại!");
    }
  } else {
    toast.error("vui lòng đúng định dạng email!");
  }
  //     handleStateUpdateLoading(false);
};
