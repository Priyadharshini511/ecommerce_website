const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AaNRagCKqBv4jIEt7EdZ3Du1fLAm7SaFRp_UDjPXqAYELKm4AxQTp6zSsTSDVsYSoFwihVcWZnMFPUbn",
  client_secret: "EM8qeeW9exy6SAkLONENylmsWM7EWan3M0NXAdK7la8QzkBS0FL9PqGJoQ60uYX355ou5NitOMSYiyAa",
});

module.exports = paypal;
