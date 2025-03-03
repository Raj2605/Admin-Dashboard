import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChat,
  UilUsdSquare,
  UilMoneyWithdrawal
} from "@iconscout/react-unicons";
import "../components//Sidebar/Sidebar.css";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Course Management",
  },
  {
    icon: UilUsersAlt,
    heading: "User Management",
  },
  {
    icon: UilPackage,
    heading: "Product Management",
  },
  {
    icon: UilChat,
    heading: "Analytics",
  }
];

export const CardsData = [
  {
    title: "Total Courses",
    color: {
      background: "linear-gradient(45deg, #2F1C53, #A46DFF, rgb(216, 47, 250)",
      boxShadow:"0 10px 20px 0px  #e0c6f5",
    },
    barValue: 70,
    value: "20000",
    png: UilUsdSquare,
    series: [
      {
        name: "Courses",
        data: [10, 20, 30, 40, 50, 60, 70]
      },
    ],
  },
  {
    title: "Total users",
    color: {
      background: "linear-gradient(45deg, #2F1C53, #A46DFF,rgb(216, 47, 250))",
      boxShadow:"0 10px 20px 0px  #e0c6f5",
    },
    barValue: 70,
    value: "20000",
    png: UilUsersAlt,
    series: [
      {
        name: "Courses",
        data: [10, 20, 30, 40, 50, 60, 70]
      },
    ],
  },
  {
    title: "Total Revenue",
    color: {
      background: "linear-gradient(45deg, #2F1C53, #A46DFF,rgb(216, 47, 250)",
      boxShadow:"0 10px 20px 0px  #e0c6f5",
    },
    barValue: 70,
    value: "20000",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Courses",
        data: [10, 20, 30, 40, 50, 60, 70]
      },
    ],
  },
]

export const UpdatesData = [
  {
    img: img1,
    name: "John Doe",
    noti: "registered as a new student.",
    time: "2 minutes ago",
  },
  {
    img: img2,
    name: "Emma Watson",
    noti: "enrolled in 'React Basics' course.",
    time: "10 minutes ago",
  },
  {
    img: img3,
    name: "Michael Smith",
    noti: "completed 'JavaScript Advanced' course.",
    time: "30 minutes ago",
  },
];
