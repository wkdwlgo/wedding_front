import { GuestBookDTO } from "@/types/guestBook.types";

export const mockGuestBook: GuestBookDTO["get"][] = [
  {
    id: 1,
    name: "jisoleil",
    message: "축하한다 기지배!",
    createdAt: "2025-04-25T13:00:00",
  },
  {
    id: 2,
    name: "짛",
    message: "너가 먼저가면 어떡하니!!!!ㅜ",
    createdAt: "2025-04-24T09:30:00",
  },
  {
    id: 3,
    name: "장지해",
    message: "30살 전에 결혼하지 말자고 했던 사람 어디갔냐!",
    createdAt: "2025-04-23T15:12:00",
  },
];
