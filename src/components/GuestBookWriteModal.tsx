import Modal from '@/components/@shared/Modal';

import Input from './@shared/Input';
import TextArea from './@shared/TextArea';
interface GuestBookWriteModalProps {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GuestBookWriteModal({
  isModal,
  setIsModal,
}: GuestBookWriteModalProps) {
  const closeModalhandler = () => {
    setIsModal(false);
  };

  return (
    <Modal
      isOpen={isModal}
      onClose={closeModalhandler}
      customDimStyle="w-[300px] md:w-[400px] "
    >
      <div className="flex flex-col gap-5 text-center">
        <p className="font-semibold text-text">작성하기</p>
        <Input fontSize="14" gap="8" placeholder="이름" />
        <TextArea size="small" variant="light" placeholder="축하메시지" />
        <div className="flex items-center justify-center gap-5">
          <button className="w-[100%] rounded-full bg-text px-4 py-3 text-sm text-white2">
            작성하기
          </button>
          <button className="w-[100%] rounded-full bg-text px-4 py-3 text-sm text-white2">
            취소하기
          </button>
        </div>
      </div>
    </Modal>
  );
}
