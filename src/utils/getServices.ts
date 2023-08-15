import axios from "axios";

export default class servicesApi {
  static async getServices() {
    try {
      const { data } = await axios.get("/api/plans");
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}
