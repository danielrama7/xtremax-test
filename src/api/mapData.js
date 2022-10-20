import Api from ".";

const mapDataAPI = {
  getAll() {
    return Api.get(`/mapData.json`);
  },
};

export default mapDataAPI;
