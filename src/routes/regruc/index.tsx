import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getRegRuc } from "@/api/regruc";
import { DataTableServer } from "@/shared/components/DataTableServer";
import { columnsRegRuc } from "@/utils/columnsRegRuc";
import { PaginationState } from "@tanstack/react-table";

export const Route = createFileRoute("/regruc/")({
  component: () => <RegRuc />,
});

const RegRuc = () => {
  const [regRuc, setRegRuc] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPageData] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const handleFetch = () => {
    getRegRuc({
      pageIndex: pagination.pageIndex,
      pageSize: pagination.pageSize,
    }).then((res) => {
      console.log(res.data);
      setIsLoading(false);
      setRegRuc(res.data.Data.Data);
      setTotal(res.data.Data.TotalRecords);
    });
  };
  const [total, setTotal] = useState(0);

  useEffect(() => {
    handleFetch();
  }, [pagination, total]);

  const handleChange = (data: any) => {
    setPageData(() => ({
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
    }));
  };
  return (
    <div className="container mx-auto py-10">
      <input
        onChange={(e) => {
          setIsLoading(true);
          setRegRuc([]);
          setPageData((prev) => ({
            pageIndex: 0,
            pageSize: +e.target.value,
          }));
        }}
        type="number"
        className="border-gray-500 border py-2 px-5"
      />
      <DataTableServer
        columns={columnsRegRuc}
        data={regRuc}
        pagination={pagination}
        isLoading={isLoading}
        total={total}
        handleChange={(data: any) => {
          handleChange(data);
        }}
      />
    </div>
  );
};
