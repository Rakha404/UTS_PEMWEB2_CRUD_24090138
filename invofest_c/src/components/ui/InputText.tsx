interface InputTextProps {
    label: string;
    nama: string;
    error?: string;
    register: any;
}

export const InputText: React.FC<InputTextProps> = ({
    label, nama, error, register,
}) => {
    return (
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={label}>{label}</label>
            <input type="text" {...register(nama)} placeholder={label} className="border p-2" />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
}

export default InputText;