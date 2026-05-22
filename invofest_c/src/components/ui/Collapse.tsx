import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface collapseProps {
    title: string;
    description: string
}

const Collapse: React.FC<collapseProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="border border-red-500 rounded-lg overflow-hidden max-w-lg mx-auto w-full">
            <button onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 flex justify-start items-center gap-4 hover:bg-gray-300 transition-colors">
                <div className="p-2 bg-gray-100">
                    <ChevronDown
                        className={`transition-transform ${isOpen ? "rotate-180" :""}`} />
                </div>

                <h3>{title}</h3>
            </button>
            {isOpen && <div className="p-4 bg-gray-50">{description}</div>}
        </div>
    );
};

export default Collapse;