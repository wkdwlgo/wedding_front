'use client';

import { useForm } from 'react-hook-form';

import Modal from '@/components/@shared/Modal';
import useToast from '@/hooks/useToast';

import Input from './@shared/Input';
import TextArea from './@shared/TextArea';
import Toast from './@shared/Toast';
interface GuestBookWriteModalProps {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormData {
  name: string;
  message: string;
}

export default function GuestBookWriteModal({
  isModal,
  setIsModal,
}: GuestBookWriteModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const { toastVisible, toastMessage, toastType, handleSuccess } = useToast();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
    //handleError('API 배포가 되지 않았습니다.');
    handleSuccess('메시지 남기기 성공했습니다!');
    setIsModal(false);
  };

  const closeModalhandler = () => {
    reset();
    setIsModal(false);
  };

  return (
    <>
      <Modal
        isOpen={isModal}
        onClose={closeModalhandler}
        customDimStyle="w-[300px] md:w-[400px] "
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 text-center"
        >
          <p className="font-semibold text-text">작성하기</p>
          <Input
            variant="default"
            fontSize="14"
            gap="8"
            placeholder="이름"
            errorMessage={
              errors.name?.type === 'maxLength'
                ? '이름은 10글자 이내로 설정하셔야 합니다.'
                : ''
            }
            isError={!!errors.name}
            inputProps={{
              ...register('name', { required: true, maxLength: 10 }),
            }}
          />
          <TextArea
            size="small"
            variant="light"
            placeholder="축하메시지"
            errorMessage={
              errors.message?.type === 'maxLength'
                ? '축하메시지는 500자 이내로 써주셔야 합니다.'
                : ''
            }
            isError={!!errors.message}
            inputProps={{
              ...register('message', { required: true, maxLength: 500 }),
            }}
          />

          <div className="flex items-center justify-center gap-5">
            <button
              type="submit"
              className="w-[100%] rounded-full bg-text px-4 py-3 text-sm text-white2"
            >
              작성하기
            </button>
            <button
              type="button"
              onClick={closeModalhandler}
              className="w-[100%] rounded-full bg-text px-4 py-3 text-sm text-white2"
            >
              취소하기
            </button>
          </div>
        </form>
      </Modal>
      {toastVisible && <Toast message={toastMessage} type={toastType} />}
    </>
  );
}
