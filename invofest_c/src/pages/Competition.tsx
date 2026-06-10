import Button from "../components/ui/Button";

export default function Competition() {
    return (
        <div>
            <section
                id="hero"
                className="py-16 flex flex-col md:flex-row items-center gap-10"
            >
                <div className="md:w-2/3 flex flex-col gap-6">

                    <h1 className="text-6xl text-red-900 font-medium">IT Competition</h1>
                    <h2 className="text-4xl text text-red-900 font-semibold">"From Creation to Inovation"</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”, Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
                    </p>

                    <div className="flex gap-3">
                        <Button label="Info Selengkapnya" variant="primary" />
                        <Button label="Hubungi Panitia" variant="outline" />
                    </div>
                </div>

                <div className="md:w-1/3 flex justify-center">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                        className="w-64 md:w-full"
                    />
                </div>
            </section>
        </div>
    )
}