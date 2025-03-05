const {
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfeExtrato",
  exposes: {
    "./ExtratoModule": "./src/app/extrato/extrato.module.ts",
    "./ExtratoService": "./src/app/extrato/services/extrato.service.ts",
  },
});

