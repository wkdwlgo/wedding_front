import axiosInstance from "./axios";
import { GuestBookDTO } from "@/types/guestBook.types";

// 방명록 조회
export const getGuestBooks = async () => {
  const response = await axiosInstance.get<GuestBookDTO["get"][]>(
    "/guestbooks"
  );
  return response.data;
};

// 방명록 작성
export const postGuestBook = async (data: {
  name: string;
  message: string;
}) => {
  const response = await axiosInstance.post("/guestbooks", data);
  return response.data;
};
