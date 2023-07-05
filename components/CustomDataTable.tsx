import React from "react";
import DataTable from "react-data-table-component";

const customStyles = {
  table: {
    style: {
      backgroundColor: "#f8f8f8",
    },
  },
  header: {
    style: { backgroundColor: "#f8f8f8" },
  },
  rows: {
    style: {
      minHeight: "72px",
      marginTop: "25px",
      borderRadius: "8px",
      backgroundColor: "white",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#f8f8f8",
      color: "#ACACAC",
      fontWeight: 600,
      fontSize: "14px",
    },
  },
  headRow: {
    style: {
      borderTopWidth: "1px",
      borderBottomColor: "#E5E5E5",
      borderBottomStyle: "solid",
      borderBottomWidth: 0,
    },
  },
  cells: {
    style: {
      color: "black",
      fontWeight: 400,
      fontSize: "14px",
    },
  },
  contextMenu: {
    style: {
      fontSize: "14px",
    },
  },
  pagination: {
    style: {
      backgroundColor: "#f8f8f8",
    },
  },
};

interface DataTableProps {
  loading: boolean | undefined;
  noDataText: string;
  columns: any;
  data: any;
  pointerOnHover?: boolean;
  onRowClicked?: (row: any, event: any) => void;
  onChangePage?: (row: any, event: any) => void;
  onChangeRowsPerPage?: (row: any, event: any) => void;
  expandableRows?: boolean;
  expandableRowsComponent?: any;
  selectableRows?: boolean;
  pagination?: boolean;
  paginationServer?: boolean;
  paginationPerPage?: number | undefined;
  paginationTotalRows?: number | undefined;
  paginationResetDefaultPage?: boolean;
  expandableRowDisabled?: any;
}

export const CustomDataTable = ({
  loading,
  noDataText,
  columns,
  data,
  pointerOnHover,
  expandableRows,
  expandableRowsComponent,
  expandableRowDisabled,
  onRowClicked,
  onChangeRowsPerPage,
  selectableRows,
  pagination,
  paginationPerPage,
  paginationServer,
  paginationResetDefaultPage,
  paginationTotalRows,
  onChangePage,
}: DataTableProps) => {
  const paginationRowsPerPageOptions = [6, 10, 15, 20, 30];
  return (
    <DataTable
      selectableRows={selectableRows}
      pointerOnHover={pointerOnHover}
      onRowClicked={onRowClicked}
      responsive
      noHeader
      expandableRows={expandableRows}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      paginationResetDefaultPage={paginationResetDefaultPage}
      paginationTotalRows={paginationTotalRows}
      paginationServer={paginationServer}
      expandableRowDisabled={expandableRowDisabled}
      expandableRowsComponent={expandableRowsComponent}
      paginationPerPage={paginationPerPage}
      noDataComponent={
        <div>{loading ? <div>Loading...</div> : <div>{noDataText}</div>}</div>
      }
      paginationRowsPerPageOptions={paginationRowsPerPageOptions}
      pagination={pagination}
      columns={columns}
      data={loading ? [] : data}
      customStyles={customStyles}
    />
  );
};

export default CustomDataTable;
