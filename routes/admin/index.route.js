const systemConfigs = require("../../configs/system");

const dashboardRoutes = require("./dashboard.route");

module.exports = (app) => {
    const PATH_ADMIN = systemConfigs.prefixAdmin;
    app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);
    
}