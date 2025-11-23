import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-medium text-stone-400 ml-1">{label}</label>}
      <input
        className={`neu-input ${className}`}
        {...props}
      />
    </div>
  );
};
