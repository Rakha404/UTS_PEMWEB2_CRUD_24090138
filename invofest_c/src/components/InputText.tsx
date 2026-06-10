import type React from "react";

interface InputTextProps {
  label: string;
  nama: string;
  type?: React.HTMLInputTypeAttribute;
  error?: string;
  register: any;
}

export const InputText: React.FC<InputTextProps> = ({
  label,
  nama,
  type = "text",
  error,
  register,
}) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={nama} className="font-medium text-[#3e2f1c]">
        {label}
      </label>

      <input
        id={nama}
        type={type}
        {...register(nama)}
        className="w-full px-4 py-3 rounded-xl border border-[#d6c7b2] bg-white focus:outline-none focus:ring-2 focus:ring-[#bfa27a]"
        placeholder={label}
      />

      {error && (
        <p className="text-sm text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};