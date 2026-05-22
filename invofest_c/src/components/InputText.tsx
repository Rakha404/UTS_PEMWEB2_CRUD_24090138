import type React from "react";

interface InputTextProps {
    label: string;
    nama: string;
    // UBAH BARIS INI agar mendukung tipe input HTML bawaan React (seperti 'text', 'date', 'number', dll)
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
            <label htmlFor={label} className="font-medium text-[#3e2f1c]">{label}</label>

            <input
                type={type}
                {...register(nama)}
                className="w-full px-4 py-3 rounded-xl border border-[#d6c7b2] bg-white focus:outline-none focus:ring-2 focus:ring-[#bfa27a]"
                placeholder={label}
            />

            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};