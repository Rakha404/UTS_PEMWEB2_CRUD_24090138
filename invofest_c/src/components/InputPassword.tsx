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
            <label htmlFor={label}>{label}</label>

            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    {...register(nama)}
                    placeholder={label}
                    className="border p-2 w-full px-3 py-2 pr-10"
                />
                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-2 text-sm">
                    {show ? "Hide" : "show"}
                </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};