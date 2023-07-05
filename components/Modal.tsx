"use client";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddProps {
  isOpen: boolean;
  isEditing: boolean;
  editData: any;
  toggleHandle: () => void;
}

function Modal({ isOpen, toggleHandle, isEditing, editData }: AddProps) {
  const [initialValue, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    image: "",
    domain: "",
    company: {
      name: "",
    },
  });

  useEffect(() => {
    if (isEditing) {
      const {
        firstName,
        lastName,
        email,
        phone,
        image,
        domain,
        company = { name: "" },
      } = editData;
      setInitialValues({
        firstName,
        lastName,
        email,
        phone,
        image,
        domain,
        company: { name: company.name },
      });
    } else {
      setInitialValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        image: "",
        domain: "",
        company: { name: "" },
      });
    }
  }, [isEditing]);

  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto w-[480px] max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    {isEditing ? "Edit User" : "Add User"}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => toggleHandle()}
                  >
                    <div className="bg-transparent text-slate-600  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </div>
                  </button>
                </div>
                <Formik
                  enableReinitialize
                  initialValues={initialValue}
                  onSubmit={(values) => {
                    fetch("https://dummyjson.com/users/add", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        phone: values.phone,
                        image: values.image,
                        domain: values.domain,
                        company: {
                          name: values.company.name,
                        },
                      }),
                    })
                      .then((res) => res.json())
                      .then(() => {
                        toast.success("Succesfully");
                        toggleHandle();
                      });
                  }}
                >
                  <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-sm font-normal leading-tight focus:outline-none focus:shadow-outline"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-sm font-normal leading-tight focus:outline-none focus:shadow-outline"
                        name="email"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-sm font-normal leading-tight focus:outline-none focus:shadow-outline"
                        name="phone"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        image
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-sm font-normal leading-tight focus:outline-none focus:shadow-outline"
                        name="image"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <Field
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-sm font-normal leading-tight focus:outline-none focus:shadow-outline"
                        name="company.name"
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        className="text-red-500 background-transparent font-normal uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          toggleHandle();
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-normal uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        {isEditing ? "Edit" : "Add User"}
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Modal;
