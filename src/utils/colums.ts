import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Cliente = {
  ClienteId: number;
  ClienteDes: string;
  ClienteCod: string;
  RazonSocial: string;
};

export const columns: ColumnDef<Cliente>[] = [
  {
    accessorKey: "ClienteDes",
    header: "Cliente",
  },
  {
    accessorKey: "ClienteCod",
    header: "Código",
  },
  {
    accessorKey: "RazonSocial",
    header: "Razon Social",
  },
  {
    accessorKey: "ClienteNIT",
    header: "NIT",
  },
];
