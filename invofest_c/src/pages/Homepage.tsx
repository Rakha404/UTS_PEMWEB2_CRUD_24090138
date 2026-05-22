import { Button } from "../components/ui/Button";

export default function Homepage() {
  return (
    <section
      id="hero"
      className="py-16 flex flex-col md:flex-row items-center gap-10"
    >
      <div className="md:w-2/3 flex flex-col gap-6">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
          className="w-72 md:w-96"
        />

        <p className="text-gray-700 leading-relaxed">
          Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
          Tomorrow ”.
        </p>

        <div className="flex gap-3">
          <Button label="Info Selengkapnya" variant="primary" />
          <Button label="Hubungi Panitia" variant="outline" />
        </div>
      </div>

      <div className="md:w-1/3 flex justify-center">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
          className="w-64 md:w-full"
        />
      </div>
    </section>
  );
}