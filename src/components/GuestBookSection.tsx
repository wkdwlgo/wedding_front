"use client";
import { mockGuestBook } from "@/data/guestBook";
import { useModal } from "@/hooks/useModal";
import GuestBookWriteModal from "./GuestBookWriteModal";
export default function GuestBookSection() {
  const {
    isOpen: isGuestBookModal,
    openModal: openGuestBookModal,
    closeModal: closeGuestBookModal,
  } = useModal();
  return (
    <section className="relative flex flex-col items-center gap-[25px] my-[50px]">
      <p className="text-xl font-bold text-woody-brown mb-2">GuestBook</p>

      <div className="bg-sun-light2 w-[100%] px-3 py-5 flex flex-col gap-[15px] rounded-md">
        {mockGuestBook.map((data, i) => (
          <div
            key={i}
            className="text-text  bg-white2 flex flex-col gap-[7px] px-2 py-3 rounded-md"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{data.name}</p>
              <p className="font-light text-sm">
                {data.createdAt.slice(0, 10)}
              </p>
            </div>
            <p className="text-ml">{data.message}</p>
          </div>
        ))}
      </div>
      <button
        className="bg-text text-white2 rounded-full px-4 py-3 text-ml"
        onClick={() => openGuestBookModal()}
      >
        축하메시지 남기기
      </button>
      <GuestBookWriteModal
        isModal={isGuestBookModal}
        setIsModal={closeGuestBookModal}
      />
    </section>
  );
}
