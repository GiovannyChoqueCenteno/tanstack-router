import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getClientes } from "../../api/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTable } from "@/shared/components/DataTable";
import { columns } from "@/utils/colums";

export const Route = createFileRoute("/facturaclient/")({
  component: () => <FacturaCliente />,
});

const FacturaCliente = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    getClientes().then((res) => {
      console.log(res.data.Data);
      setClientes(res.data.Data);
    });
  }, []);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={clientes} />
    </div>
  );
};
