import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8d02a68e1d7741a44ccd142356f212e0adc77079506b932e53336a56c94b5f5c"
  }
});
