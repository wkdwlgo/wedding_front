import clsx from 'clsx';
import React from 'react';

type InputProps = {
  label?: string;
  labelText?: string;
  labelColor?: 'charcoal' | 'gray' | 'white';
  fontSize?: '14' | '16';
  variant?: 'default' | 'elevated';
  gap?: '8' | '12';
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

/**
 * InputProps Details
 *
 * @param labelText label값과 화면에 표시되는 Text를 다르게 설정할 경우 사용
 * @param fontSize 전체 글자 사이즈
 * @param variant label과 input의 테마, default와 elevated 중 설정 가능
 * @param gap label, input, errorMessage 세 요소 사이의 간격
 * @param isError 에러 존재 여부
 * @param errorMessage 에러가 존재할 경우 표시할 에러 메세지
 */

export default function Input({
  label,
  labelText,
  labelColor,
  placeholder,
  gap = '12',
  fontSize = '16',
  variant = 'default',
  isError = false,
  errorMessage,
  inputProps,
  ...props
}: InputProps) {
  const inputId = React.useId();

  return (
    <div
      className={clsx('flex w-full flex-col items-start', {
        'gap-3': gap === '12',
        'gap-2': gap === '8',
        'text-sm': fontSize === '14',
        'text-md': fontSize === '16',
      })}
      {...props}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={clsx('font-semibold', {
            'text-point-label': labelColor === 'charcoal',
            'text-secondary-50': labelColor === 'gray',
            'text-white': labelColor === 'white',
          })}
        >
          {labelText || label}
        </label>
      )}
      <input
        id={inputId}
        placeholder={placeholder}
        className={clsx(
          'w-full rounded-lg px-4 py-[10px] font-medium outline outline-1',
          {
            'placeholder:text-secondary-50 bg-white text-text':
              variant === 'default',
            'bg-secondary-100 text-text-default placeholder:text-secondary-70':
              variant === 'elevated',
            'focus-within:outline-default-primary outline-transparent':
              !isError,
            'outline-status-danger focus-within:outline-status-danger': isError,
          }
        )}
        {...inputProps}
      />
      {isError && (
        <p className="text-status-danger text-xs font-semibold md:text-sm">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
