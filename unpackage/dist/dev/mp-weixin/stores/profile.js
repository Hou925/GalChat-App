"use strict";
const common_vendor = require("../common/vendor.js");
const useProfileStore = common_vendor.defineStore("profile", {
  state: () => ({
    profile: null
  }),
  actions: {
    async getProfile() {
      try {
        const response = await fetch(
          "https://gal-chat-test-970e995e1901.herokuapp.com/api/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "authorization": common_vendor.index.getStorageSync("token")
            }
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }
        const profileData = await response.json();
        this.profile = profileData.value;
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    },
    async initializeProfile() {
      if (!this.profile) {
        try {
          await this.getProfile();
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
});
exports.useProfileStore = useProfileStore;
