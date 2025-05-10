import clsx from 'clsx';
import Image from 'next/image';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
}

export default function Toast({ message, type }: ToastProps) {
  const textColor = clsx({
    'text-text': type === 'success',
    'text-status-danger': type === 'error',
  });

  return (
    <aside
      role="alert"
      className="fixed bottom-28 left-1/2 z-100 w-11/12 -translate-x-1/2 translate-y-full transform rounded-lg border-2 border-text bg-white2 p-4 shadow-lg transition-transform duration-300 ease-in-out md:w-fit"
    >
      <div className="flex justify-center gap-2">
        {type === 'success' ? (
          <Image
            src={'/images/icons/checkbox.svg'}
            width={23}
            height={23}
            alt="success"
          />
        ) : (
          <Image
            src={'/images/icons/warning.svg'}
            width={23}
            height={23}
            alt="error"
          />
        )}
        <span className={textColor}>{message}</span>
      </div>
    </aside>
  );
}
