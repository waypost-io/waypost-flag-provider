const axios = require("axios");
require("dotenv").config();

class FlagManager {
  constructor() {
    this._flags = [];
  }

  async fetchFlags() {
    try {
      const response = await axios.get(
        `${process.env.FEATURE_FLAG_MANAGER_URL}/api/flags?prov=true`
      );
      this._flags = response.data;
    } catch (err) {
      console.log("Could not get flags from waypost server");
    }
  }

  setFlags(newFlags) {
    this._flags = [...newFlags];
  }

  getFlags() {
    return this._flags;
  }
}

module.exports.flagManager = new FlagManager();
