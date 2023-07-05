import React from "react";
import Image from "next/image";
function InfoCard(props: {
  path: any;
  name: string;
  revenue: string;
  color: string;
}) {
  return (
    <div
      className="max-w-96 max-h-[156px] rounded-lg p-5"
      style={{ backgroundColor: props.color }}
    >
      <div className="w-12 h-9 mb-4">
        <Image src={props.path.src} height={32} width={38} alt={props.name} />
      </div>
      <span className="font-medium text-gray text-sm">{props.name}</span>
      <span className="flex justify-end items-end text-xlarge font-bold text-black ">
        {props.revenue}
      </span>
    </div>
  );
}

export default InfoCard;
