import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RegRuc = {
  RegRucId: number;
  EmpresaId: number;
  RegRucDes: string;
};

export const columnsRegRuc: ColumnDef<RegRuc>[] = [
  {
    accessorKey: "RegRUCId",
    header: "RegRUCId",
  },
  {
    accessorKey: "EmpresaId",
    header: "EmpresaId",
  },
  {
    accessorKey: "RegRUCDes",
    header: "RegRUCDes",
  },
];
