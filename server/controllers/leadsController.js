const { constructResponse } = require("../utils/utility");
const LeadService = new (require("../services/leadsService"))();

module.exports = (app) => {
    app.post("/api/leads", async (req, res) => {
        const responseData = await LeadService.createLead(req.body);
        return constructResponse(res, responseData);
    });

    app.get("/api/leads", async (req, res) => {
        const responseData = await LeadService.getAllLeads();
        return constructResponse(res, responseData);
    });
};