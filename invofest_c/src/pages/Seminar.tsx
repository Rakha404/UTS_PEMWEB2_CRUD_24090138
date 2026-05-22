import Button from "../components/ui/Button";

export default function Seminar() {
    return (
        <div>
            <section
                id="hero"
                className="py-16 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-2/3 flex flex-col gap-6">
                    <h1 className="text-6xl text-red-900 font-medium">IT Seminar</h1>
                    <h2 className="text-4xl text text-red-900 font-semibold">“Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”</h2>

                    <p className="text-gray-700 leading-relaxed">
                        Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem di mana manusia dan AI bekerja sebagai mitra yang sinergis.Yang bertujuan mengubah paradigma dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang teknologi AI yang berpusat pada manusia.
                    </p>

                    <div className="flex gap-3">
                        <Button label="Daftar Sekarang" variant="primary" />
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                        className="w-64 md:w-full"
                    />
                </div>
            </section>
        </div>
    );
}