import CarCard from "../../components/CarCard";
import Header from "../../components/Header";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="dsct-section-products">
          <div className="dsct-section-content dsct-container">
            <h2 className="dsct-section-title">Venha nos visitar</h2>
            <div className="dsct-car-cards">
            <CarCard />
            <CarCard />
            </div>

            
          </div>
        </section>

        <section className="dsct-section-faq">
          <div className="dsct-section-content dsct-container">
            <h2 className="dsct-section-title">O que estão dizendo</h2>
            <div className="dsct-faq"></div>
          </div>
        </section>
      </main>
    </>
  );
}
