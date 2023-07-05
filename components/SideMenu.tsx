import React from "react";
import Image from "next/image";
import avatarImage from "../assets/avatar.png";
import Link from "next/link";
import SignOut from "@/assets/svgs/sideMenu/SignOut";
import HomeSvg from "@/assets/svgs/sideMenu/HomeSvg";
import StudentSvg from "@/assets/svgs/sideMenu/StudentSvg";
import CourseSvg from "@/assets/svgs/sideMenu/CourseSvg";
import ReportSvg from "@/assets/svgs/sideMenu/ReportSvg";
import SettingSvg from "@/assets/svgs/sideMenu/SettingSvg";
import PaymentSvg from "@/assets/svgs/sideMenu/PaymentSvg";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function SideMenu(props: { isShow: boolean }) {
  const pathname = usePathname();

  const { isShow } = props;
  const router = useRouter();

  return (
    <div
      className={`${
        isShow ? "flex" : "hidden"
      } w-[270px] h-full fixed bg-dirtyWhite  flex-col	justify-between `}
    >
      {/* header */}
      <div className="flex justify-center pt-5 items-center">
        <div className="h-[20px] w-1 bg-yellow   -0 "></div>
        <span className="flex justify-center ml-2 text-md font-bold">
          MANAGE COURSES
        </span>
      </div>
      {/* avatar & info */}
      <div>
        <div className="flex justify-center pt-10">
          <Image
            src={avatarImage}
            width={128}
            height={128}
            alt="Picture of the author"
            className="rounded-full "
          />
        </div>

        <span className="flex justify-center text-lg font-bold text-black pt-5">
          John Doe
        </span>
        <span className="flex justify-center text-sm font-medium text-yellow  pt-2">
          Admin
        </span>
      </div>

      {/* MainItem */}
      <div className="px-6">
        <ul className="flex flex-col justify-center item-center pt-16 w-full">
          <li
            className={`${
              pathname == "/home" ? "bg-yellow rounded-sm" : ""
            } flex justify-center items-center mb-4 h-10  hover:bg-yellow hover:rounded-sm `}
          >
            <HomeSvg />
            <Link
              href="/home"
              className="px-5 text-sm font-medium text-center w-28"
            >
              Home
            </Link>
          </li>
          <li
            className={`${
              pathname == "/course" ? "bg-yellow rounded-sm" : ""
            } flex justify-center items-center mb-4 h-10  hover:bg-yellow hover:rounded-sm `}
          >
            <CourseSvg />
            <Link
              href="/course"
              className="px-5 text-sm font-medium text-center w-28 "
            >
              Course
            </Link>
          </li>
          <li
            className={`${
              pathname == "/students" ? "bg-yellow rounded-sm" : ""
            } flex justify-center items-center mb-4 h-10  hover:bg-yellow hover:rounded-sm `}
          >
            <StudentSvg />
            <Link
              href="/students"
              className="px-5 text-sm font-medium text-center w-28"
            >
              Students
            </Link>
          </li>
          <li
            className={`${
              pathname == "/payment" ? "bg-yellow rounded-sm" : ""
            } flex justify-center items-center mb-4 h-10  hover:bg-yellow hover:rounded-sm `}
          >
            <PaymentSvg />
            <Link
              href="/payment"
              className="px-5 text-sm font-medium text-center w-28"
            >
              Payment
            </Link>
          </li>
          <li
            className={`${
              pathname == "/reports" ? "bg-yellow rounded-sm" : ""
            } flex justify-center items-center mb-4 h-10  hover:bg-yellow hover:rounded-sm `}
          >
            <ReportSvg />
            <Link
              href="/reports"
              className="px-5 text-sm font-medium text-center w-28 "
            >
              Report
            </Link>
          </li>
          <li
            className={`${
              pathname == "/settings" ? "bg-yellow rounded-sm" : ""
            } flex justify-center items-center mb-4 h-10  hover:bg-yellow hover:rounded-sm `}
          >
            <SettingSvg />
            <Link
              href="/settings"
              className="px-5 text-sm font-medium text-center w-28"
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <div
        onClick={() => {
          router.push("/login");
        }}
        className="hover:cursor-pointer flex justify-center items-center pb-8"
      >
        <span className="text-sm font-medium mr-4 ">Logout</span>

        <SignOut />
      </div>
    </div>
  );
}

export default SideMenu;
