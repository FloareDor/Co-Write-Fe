import { recentAssignments } from "@/types/types";
import axios from "axios";

export const getAllAssignments = async (
  usertype: string
): Promise<recentAssignments[]> => {
  try {
    const userInfoString = localStorage.getItem("userInfo");
    if (!userInfoString) {
      return [] as recentAssignments[];
    } else {
      const assignmentsData = await axios
        .post(
          `http://157.245.240.148:8000/${
            usertype === "professor"
              ? "assignments-by-prof"
              : "assignments-by-student"
          }`,
          {},
          {
            headers: {
              Authorization: `${localStorage.getItem("authToken")}`,
            },
          }
        )
        .then((res) => {
          return res.data;
        });
      return assignmentsData;
    }
  } catch (error) {
    return [] as recentAssignments[];
  }
};

export const joinAssignment = async (
  assignmentId: string
): Promise<Boolean> => {
  try {
    const formData = new FormData();
    formData.append("assignment_id", assignmentId);
    const assignmentsData = await axios
      .post(`http://157.245.240.148:8000/open-assignment`, formData, {
        headers: {
          Authorization: `${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        return true;
      });
    return true;
  } catch (error) {
    return false;
  }
};
