import clientAxios from "../lib/axios";

export const getClientes = () =>
  clientAxios.post("/Cliente/GetClientesWithFacturaDif", {
    AppInfoVm: {
      AppCliente: "postman",
      EmpresaId: 1,
      LoginId: "jmercado",
      GestionId: 13,
    },
    Parameters: {
      LoginId: "jmercado",
    },
    Models: null,
  });
