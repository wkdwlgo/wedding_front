'use client';
import { mockGuestBook } from '@/data/guestBook';
import { useModal } from '@/hooks/useModal';

import GuestBookWriteModal from './GuestBookWriteModal';
export default function GuestBookSection() {
  const {
    isOpen: isGuestBookModal,
    openModal: openGuestBookModal,
    closeModal: closeGuestBookModal,
  } = useModal();
  return (
    <section className="relative my-[50px] flex flex-col items-center gap-[25px]">
      <p className="mb-2 text-xl font-bold text-woody-brown">GuestBook</p>

      <div className="flex w-[100%] flex-col gap-[15px] rounded-md bg-sun-light2 px-3 py-5">
        {mockGuestBook.map((data, i) => (
          <div
            key={i}
            className="flex flex-col gap-[7px] rounded-md bg-white2 px-2 py-3 text-text"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{data.name}</p>
              <p className="text-sm font-light">
                {data.createdAt.slice(0, 10)}
              </p>
            </div>
            <p className="text-ml">{data.message}</p>
          </div>
        ))}
      </div>
      <button
        className="text-ml rounded-full bg-text px-4 py-3 text-white2"
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
