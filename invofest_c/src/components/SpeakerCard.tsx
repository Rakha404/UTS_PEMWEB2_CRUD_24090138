interface SpeakerCardProps {
    name: string;
    role: string;
    imageUrl: string;
}
export const SpeakerCard: React.FC<SpeakerCardProps> = ({
    name,
    role,
    imageUrl,
}) => {
    return (
        <div className="cursor-pointer group w-full max-w-280px pt-12">
            <div className="relative z-10">
                <img
                    src={imageUrl}
                    alt={name}
                    className="h-44 w-44 rounded-full border-[6px] border-red-900 mx-auto 
                               group-hover:scale-105 transition-transform duration-300 object-cover shadow-lg"
                />
            </div>

            <div className="bg-white border-[3px] border-red-900 rounded-xl pt-24 pb-8 px-4 
                            -mt-20 relative shadow-xl transition-all duration-300 
                            group-hover:bg-red-50 group-hover:shadow-2xl">
                
                <div className="flex flex-col items-center text-center gap-1">
                    <h3 className="text-xl text-red-900 font-bold leading-tight">
                        {name}
                    </h3>
                    <p className="text-[12px] text-gray-500 font-medium uppercase tracking-wide">
                        {role}
                    </p>
                </div>

            </div>
        </div>
    );
};
export default SpeakerCard;