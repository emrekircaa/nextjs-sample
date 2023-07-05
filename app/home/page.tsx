"use client";
import student from "../../assets/svgs/home/graduation.svg";
import course from "../../assets/svgs/home/bookmark.svg";
import payment from "../../assets/svgs/home/usd-square.svg";
import user from "../../assets/svgs/home/Vector.svg";
import InfoCard from "@/components/InfoCard";

export default function page() {
  const Data = [
    {
      id: 1,
      path: student,
      name: "Student",
      revenue: "243",
      color: "#F0F9FF",
    },
    {
      id: 2,
      path: course,
      name: "Course",
      revenue: "12",
      color: "#FEF6FB",
    },
    {
      id: 3,
      path: payment,
      name: "Payments",
      revenue: "556,000 ₺",
      color: "#FEFBEC",
    },
    { id: 4, path: user, name: "Users", revenue: "3", color: "#FEAF00" },
  ];
  return (
    <div className="p-9">
      <div className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {Data.map((e) => (
          <InfoCard
            key={e.id}
            path={e.path}
            name={e.name}
            revenue={e.revenue}
            color={e.color}
          />
        ))}
      </div>
    </div>
  );
}
