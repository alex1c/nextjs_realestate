import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "9352ec2060mshbb3c9c44fb8d69bp1c139djsn9bdf0bfb4f0d",
    },
  });
  return data
};
