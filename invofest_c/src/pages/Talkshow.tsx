import Button from "../components/ui/Button";

export default function Talkshow() {
    return (
        <div>
            <section
                id="hero"
                className="py-16 flex flex-col md:flex-row items-center gap-10"
            >
                <div className="md:w-2/3 flex flex-col gap-6">
                    <h1 className="text-6xl text-red-900 font-medium">IT Talkshow</h1>
                    <h2 className="text-4xl text text-red-900 font-semibold">“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”</h2>

                    <p className="text-gray-700 leading-relaxed">
                        Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.
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