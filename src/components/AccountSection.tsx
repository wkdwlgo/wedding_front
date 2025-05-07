/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

import { useModal } from '@/hooks/useModal';

import AccountCopyModal from './AccountCopyModal';
//import Image from "next/image";

const husbandAccountInfo = [
  {
    label: '신랑',
    bank: '신한',
    name: '석기범',
    accountNumber: '302-0425-7005-01',
    kakaoPayUrl: 'https://qr.kakaopay.com/Ej8rxqRqr',
  },
  {
    label: '신랑 아버지',
    bank: 'KB',
    name: '석00',
    accountNumber: '302-0425-7005-01',
  },
  {
    label: '신랑 어머니',
    bank: 'MG',
    name: '000',
    accountNumber: '302-0425-7005-01',
  },
];
const brideAccountInfo = [
  {
    label: '신부',
    bank: '카카오',
    name: '박혜림',
    accountNumber: '302-0425-7005-01',
    kakaoPayUrl: 'https://qr.kakaopay.com/Ej8rxqRqr',
  },
  {
    label: '신부 아버지',
    bank: '농협',
    name: '박00',
    accountNumber: '302-0425-7005-01',
  },
  {
    label: '신부 어머니',
    bank: '신협',
    name: '000',
    accountNumber: '302-0425-7005-01',
  },
];

export default function AccountSection() {
  const {
    isOpen: isAcconuteModal,
    openModal: openAccountModal,
    closeModal: closeAccountModal,
  } = useModal();
  const [isCompleted, setIsCompleted] = useState(false);
  const [kakaoPayUrl, setKakaoPayUrl] = useState('');
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleOpen1 = () => setIsOpen1((prev) => !prev);
  const toggleOpen2 = () => setIsOpen2((prev) => !prev);
  const handleCopy = (accountNumber: string, kakaoUrl: string) => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        setKakaoPayUrl(kakaoUrl ?? '');
        setIsCompleted(true);
        openAccountModal();
      })
      .catch(() => {
        setIsCompleted(false);
        openAccountModal();
      });
  };
  return (
    <section className="relative my-[50px] flex flex-col items-center gap-[25px]">
      <p className="text-xl font-bold text-woody-brown">마음 전하실 곳</p>
      <div className="text-center leading-loose">
        참석이 어려우신 분들을 위해
        <br />
        계좌번호를 기재하였습니다.
        <br />
        너그러운 마음으로 양해 부탁드립니다.
      </div>
      <div className="flex flex-col items-center gap-[14px]">
        <div className="w-[343px]">
          {/* 버튼 */}
          <button
            onClick={toggleOpen1}
            className={`flex w-full items-center justify-between rounded-t-md bg-sun-light2 py-4 pl-28 pr-4 ${
              !isOpen1 ? 'rounded-b-md' : ''
            }`}
          >
            <p className="text-base font-semibold text-text">신랑측 계좌번호</p>
            <img
              src="/images/icons/arrow.svg"
              width={24}
              height={24}
              alt="화살표"
              className={`${
                isOpen1 ? 'rotate-180' : 'rotate-0'
              } transition-transform duration-500`}
            />
          </button>

          {/* 토글 영역 */}
          {isOpen1 && (
            <div className="rounded-b-md border-t border-gray-200 bg-white2 px-4 py-3">
              {husbandAccountInfo.map((account, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-3 py-2 ${
                    i < 2 ? 'border-b border-gray-300' : ''
                  }`}
                >
                  <div className="text-sm text-text">
                    <p className="font-semibold">{account.label}</p>
                    <p>{account.bank}</p>
                    <p>{account.name}</p>
                  </div>
                  <button
                    className="rounded-full bg-text px-3 py-2 text-sm text-white2"
                    onClick={() =>
                      handleCopy(
                        account.accountNumber,
                        account.kakaoPayUrl || ''
                      )
                    }
                  >
                    복사하기
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-[343px]">
          {/* 버튼 */}
          <button
            onClick={toggleOpen2}
            className={`flex w-full items-center justify-between rounded-t-md bg-sun-light2 py-4 pl-28 pr-4 ${
              !isOpen2 ? 'rounded-b-md' : ''
            }`}
          >
            <p className="text-base font-semibold text-text">신부측 계좌번호</p>
            <img
              src="/images/icons/arrow.svg"
              width={24}
              height={24}
              alt="화살표"
              className={`${
                isOpen2 ? 'rotate-180' : 'rotate-0'
              } transition-transform duration-500`}
            />
          </button>

          {/* 토글 영역 */}
          {isOpen2 && (
            <div className="rounded-b-md border-t border-gray-200 bg-white2 px-4 py-3">
              {brideAccountInfo.map((account, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-3 py-2 ${
                    i < 2 ? 'border-b border-gray-300' : ''
                  }`}
                >
                  <div className="text-sm text-text">
                    <p className="font-semibold">{account.label}</p>
                    <p>{account.bank}</p>
                    <p>{account.name}</p>
                  </div>
                  <button
                    className="rounded-full bg-text px-3 py-2 text-sm text-white2"
                    onClick={() =>
                      handleCopy(
                        account.accountNumber,
                        account.kakaoPayUrl || ''
                      )
                    }
                  >
                    복사하기
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <AccountCopyModal
        isModal={isAcconuteModal}
        setIsModal={closeAccountModal}
        isCompleted={isCompleted}
        kakaoPayUrl={kakaoPayUrl}
      />
    </section>
  );
}
