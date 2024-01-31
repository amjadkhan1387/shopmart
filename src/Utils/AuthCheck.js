import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./urls";

export const getLoginStatus = () => {
  const items = localStorage.getItem("loginStatus");
  return items;
};
console.log(getLoginStatus())

export const LoginCheck = async () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (getLoginStatus() === null || getLoginStatus() === "0" || getLoginStatus() === undefined) {
      navigate("/login");
    }
  });
};

