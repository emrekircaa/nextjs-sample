"use client";
import React, { useState, useEffect } from "react";
import DataTable from "@/components/CustomDataTable";
import bin from "../../assets/svgs/students/bin.svg";
import pen from "../../assets/svgs/students/pen.svg";
import Image from "next/image";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Modal from "@/components/Modal";
import SearchSvg from "@/assets/svgs/students/SearchSvg";

function page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const [addIsOpen, setAddIsOpen] = useState(false);
  const [isOpenEdit, setisOpenEdit] = useState(false);
  const [search, setSearch] = useState<any>("");
  const [PerRows, setPerRows] = useState<number>(6);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [reset, setReset] = useState<boolean>(false);
  const [count, setCount] = useState<number>(100);
  const [editData, setEditData] = useState<any>({});
  const [filter, setFilter] = useState<{
    limit: number | null;
    skip: number | null;
  }>({ limit: PerRows, skip: 0 });
  useEffect(() => {
    if (search !== "") {
      fetch(`https://dummyjson.com/users/search?q=${search}`)
        .then((res) => res.json())
        .then((res) => {
          setCount(res.total);
          setData(res);
          setLoading(false);
        });
    } else {
      fetch(
        `https://dummyjson.com/users?limit=${filter.limit}&skip=${filter.skip}`
      )
        .then((res) => res.json())
        .then((res) => {
          setCount(res.total);
          setData(res);
          setLoading(false);
        });
    }
  }, [search, filter]);
  const handlePerRowsChange = (e: number) => {
    setPerRows(e);
    setReset(!reset);
    setFilter({
      skip: PerRows && pageNumber === 0 ? pageNumber * e : (pageNumber - 1) * e,
      limit: e,
    });
  };

  const pagination = (e: number) => {
    setPageNumber(e);
    const control = count / PerRows;
    const flag = Math.ceil(control);
    if (e <= flag) {
      setFilter({
        skip: PerRows && (e - 1) * PerRows,
        limit: PerRows,
      });
    } else if (e === flag) {
      setFilter({
        skip: count,
        limit: PerRows,
      });
    }
  };
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div
        className="p-10 "
        style={{
          background: "#f8f8f8",
        }}
      >
        <div>
          <span className="font-bold text-2xl">Student List</span>
          <div className="flex justify-end mb-3">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <div className="w-4 h-4 text-gray-500 dark:text-gray-400">
                    <SearchSvg />
                  </div>
                </div>
                <input
                  onChange={(event) => {
                    setSearch(event.target.value);
                    setFilter({ limit: PerRows, skip: 0 });
                    setReset(!reset);
                  }}
                  type="text"
                  placeholder="Search..."
                  className="block w-[212px] h-[40px] rounded-lg border-dirtyWhite border-solid border-2 pl-3 text-sm font-medium"
                />
              </div>
            </div>
            <button
              className="w-[200px] h-[40px] rounded-lg text-dirtyWhite bg-yellow ml-4 hover:bg-dirtyWhite hover:text-yellow hover:border-yellow hover:border-2"
              onClick={() => {
                setisOpenEdit(false);
                setAddIsOpen(!addIsOpen);
              }}
            >
              ADD NEW STUDENT
            </button>
          </div>
        </div>
        <DataTable
          columns={[
            {
              cell: (row: any) => {
                return (
                  <Image
                    src={row.image}
                    height={55}
                    width={65}
                    alt={row.image}
                  />
                );
              },
            },
            {
              name: "Name",
              selector: (row: any) => `${row.firstName} ${row.lastName}`,
            },
            {
              name: "Email",
              selector: (row: any) => row.email,
            },
            {
              name: "Phone",
              selector: (row: any) => row.phone,
            },
            {
              name: "Website",
              selector: (row: any) => row.domain,
            },
            {
              name: "Name",
              selector: (row: any) => row.firstName,
            },
            {
              name: "Company Name",
              selector: (row: any) => row.company.name,
            },
            {
              cell: (row: any) => {
                return (
                  <div className="flex justify-between hover:cursor-pointer">
                    <Image
                      src={bin}
                      height={18}
                      width={18}
                      alt="binsvg"
                      onClick={() => {
                        Swal.fire({
                          title: "Do you want the delete this user ?",
                          showConfirmButton: true,
                          showCancelButton: true,
                          cancelButtonText: "No",
                          confirmButtonText: "Yes",

                          confirmButtonColor: "#EF4444",
                          cancelButtonColor: "#11B981",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            fetch(`https://dummyjson.com/users/${row?.id}`, {
                              method: "DELETE",
                            })
                              .then((res) => res.json())
                              .then((res) => {
                                if (res.message) {
                                  toast.error("not delted user");
                                } else {
                                  toast.success("Succesfully");
                                }
                              });
                          }
                        });
                      }}
                    />
                    <div className="pl-4">
                      <Image
                        src={pen}
                        height={18}
                        width={18}
                        alt="pensvg"
                        onClick={() => {
                          setAddIsOpen(true);
                          setisOpenEdit(true);
                          setEditData(row);
                        }}
                      />
                    </div>
                  </div>
                );
              },
            },
          ]}
          data={data.users}
          pagination
          paginationServer={search == "" ? true : false}
          paginationTotalRows={count}
          paginationPerPage={6}
          onChangeRowsPerPage={(e) => handlePerRowsChange(e)}
          onChangePage={(e) => {
            pagination(e);
          }}
          paginationResetDefaultPage={reset}
          loading={loading}
          noDataText={"No data"}
        />
      </div>
      <Modal
        isOpen={addIsOpen}
        isEditing={isOpenEdit}
        editData={editData}
        toggleHandle={() => {
          setAddIsOpen(false);
          setisOpenEdit(false);
          setEditData({});
        }}
      />
    </div>
  );
}

export default page;
