import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
}

export default function Toast({ message, type }: ToastProps) {
  const textColor = clsx({
    'text-white': type === 'success',
    'text-status-danger': type === 'error',
  });

  return (
    <aside
      role="alert"
      className="border-primary-5 bg-default-tertiary fixed bottom-28 left-1/2 z-100 w-11/12 -translate-x-1/2 translate-y-full transform rounded-lg border-2 p-4 shadow-lg transition-transform duration-300 ease-in-out md:w-fit"
    >
      <div className="flex justify-center gap-2">
        {type === 'success' ? (
          <Image
            src={'/images/icons/checkbox.svg'}
            width={10}
            height={10}
            alt="success"
          />
        ) : (
          <Image
            src={'/images/icons/warning.svg'}
            width={10}
            height={10}
            alt="error"
          />
        )}
        <span className={textColor}>{message}</span>
      </div>
    </aside>
  );
}
