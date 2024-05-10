import { PaginationState } from "@tanstack/react-table";
import clientAxios from "../lib/axios";

export const getRegRuc = (pagination: PaginationState) =>
  clientAxios.post("/RegRuc/GetRegRucOffset", {
    AppInfoVm: {
      AppCliente: "postman",
      EmpresaId: 1,
      LoginId: "jmercado",
      GestionId: 13,
      DecimalNro: 2,
      DecimalCant: 4,
    },
    Parameters: {
      PageNumber: pagination.pageIndex,
      PageSize: pagination.pageSize,
    },
    Models: null,
  });
