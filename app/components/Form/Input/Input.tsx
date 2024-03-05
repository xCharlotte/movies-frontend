import { useEffect, useState } from 'react';

export type InputProps = {
  label: string;
  name: string;
  id: string;
  type: string;
  required: boolean;
  placeholder: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  name,
  id,
  type,
  required,
  placeholder,
  error,
  onChange,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
      <input 
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
      {!!error && (
        <p className="mt-2 text-sm text-error" data-testid="error-message">
          {error}
        </p>
      )}
    </div>
  );
}