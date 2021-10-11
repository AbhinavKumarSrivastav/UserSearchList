const axios = require("axios");

export const userService = {
  searchInput,
};

async function searchInput(searchValue) {
  return await axios({
    method: "get",
    url:
      "http://toro278.us-east.toroserver.com/" +
      `api/demo_api_inventory/1.0/sku/search?sku_name=${searchValue}`,
  })
    .then(function (response) {
      console.log("service response", response);
      return response.data;
    })
    .catch((err) => {
      if (err.response.status === 400) {
        return err.response;
      }
    });
}
