const LeadsModel = require("../models/Leads"); // Ensure this points to your leads model

module.exports = class LeadsService {
  async createLead(body) {
    try {
      body.email = body.email.toLowerCase();

      let leadExists = await LeadsModel.findOne({ email: body.email });
      if (leadExists) {
        return {
          message: "Email already taken",
          success: false,
          status: 409,
        };
      } else {
        let result = await LeadsModel.create(body);
        return {
          data: result,
          message: "Lead added successfully!",
          success: true,
          status: 201,
        };
      }
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: "Something went wrong",
      };
    }
  }

  async getAllLeads() {
    try {

      let result = await LeadsModel.find();
      return {
        data: result,
        status: 200,
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        status: 500,
        message: "Something went wrong",
      };
    }
  }
};