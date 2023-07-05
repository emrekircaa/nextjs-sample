import SvgComponent from "@/assets/svgs/navbar/bell";
import Circle from "@/assets/svgs/navbar/caretCircle";
import React from "react";

function Navbar(props: { isShow: boolean }) {
  const { isShow } = props;
  return (
    <div
      className={`${
        isShow ? "flex" : "hidden"
      } h-[60px] bg-white justify-between items-center px-8  border-solid border-b-2 border-stone-100`}
    >
      <Circle />
      <SvgComponent />
    </div>
  );
}

export default Navbar;
