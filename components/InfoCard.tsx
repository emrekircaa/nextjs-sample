import React from "react";
import Image from "next/image";
function InfoCard(props: {
  path: any;
  name: string;
  revenue: string;
  color: string;
}) {
  console.log(props.name);
  return (
    <div
      className="max-w-96 max-h-[156px] rounded-lg p-5"
      style={{ backgroundColor: props.color }}
    >
      <div className=" h-9 mb-4">
        <Image
          src={props.path.src}
          height={32}
          width={props.name == "Student" ? 55 : 38}
          alt={props.name}
        />
      </div>
      <span className="font-medium text-gray text-sm">{props.name}</span>
      <span className="flex justify-end items-end text-xlarge font-bold text-black ">
        {props.revenue}
      </span>
    </div>
  );
}

export default InfoCard;
