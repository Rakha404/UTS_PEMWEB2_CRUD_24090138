interface SelectProps {
    label: string;
    name: string;
    register: any;
    error?: string;
    options: { label: string; value: string }[];
}
export const Select: React.FC<SelectProps> = ({
    label,
    name,
    register,
    error,
    options
}) => {
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <select {...register(name)} className="border px-3 py-2 rounded">
                <option value="">Pilih...</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};