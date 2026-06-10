import Button from "../components/ui/Button";

export default function Workshop() {
    return (
        <div>
            <section
                id="hero"
                className="py-16 flex flex-col md:flex-row items-center gap-10"
            >
                <div className="md:w-2/3 flex flex-col gap-6">
                    <h1 className="text-6xl text-red-900 font-medium">IT Workshop</h1>
                    <h2 className="text-4xl text text-red-900 font-semibold">“AI for a Sustainable Future: The Role of Z Generation in the Digital Era”</h2>

                    <p className="text-gray-700 leading-relaxed">
                        IT Workshop ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.
                    </p>
                    <div className="flex gap-3">
                        <Button label="Daftar Sekarang" variant="primary" />
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
                        className="w-64 md:w-full"
                    />
                </div>
            </section>
        </div>
    );
}