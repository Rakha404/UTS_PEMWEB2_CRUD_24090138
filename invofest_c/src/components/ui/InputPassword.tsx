import { useState } from "react";

interface InputPasswordProps {
    label: string;
    nama: string;
    error?: string;
    register: any;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
    label,
    nama,
    error,
    register,
}) => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={nama}>{label}</label>

            <div className="relative">
                <input
                    id={nama}
                    type={show ? "text" : "password"}
                    {...register(nama)}
                    placeholder={label}
                    className="border w-full px-3 py-2 pr-12"
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600"
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};