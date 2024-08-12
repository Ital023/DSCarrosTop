import CarCard from "../../components/CarCard";
import Header from "../../components/Header";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className="dsct-container">
        <section>
          <h2 className="dsct-section-title">Venha nos visitar</h2>
          <div className="dsct-car-cards">
            <CarCard/>
            <CarCard/>
          </div>
        </section>
      </main>
    </>
  );
}
