import Modal from "@/components/@shared/Modal";
import Image from "next/image";
import Link from "next/link";
interface AccountCopyModalProps {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  isCompleted: boolean;
  kakaoPayUrl?: string;
}

export default function AccountCopyModal({
  isModal,
  setIsModal,
  isCompleted,
  kakaoPayUrl,
}: AccountCopyModalProps) {
  const closeModalhandler = () => {
    setIsModal(false);
  };

  return (
    <Modal
      isOpen={isModal}
      onClose={closeModalhandler}
      customDimStyle="w-[300px] md:w-[400px] "
    >
      <div className="text-center">
        <p className="py-7 text-text font-semibold">
          {isCompleted
            ? "계좌번호가 복사되었습니다."
            : "계좌번호를 복사하지 못했습니다."}
        </p>
        {kakaoPayUrl && (
          <Link
            href={kakaoPayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src={"/images/icons/kakaopay.svg"}
              width={100}
              height={50}
              alt="카카오페이아이콘"
            />
          </Link>
        )}
      </div>
    </Modal>
  );
}
