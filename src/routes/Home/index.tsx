import CarCard from "../../components/CarCard";
import CommentsCard from "../../components/CommentsCard";
import Header from "../../components/Header";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <section className="dsct-section-products">
          <div className="dsct-container">
            <h2 className="dsct-section-title">Venha nos visitar</h2>
            <div className="dsct-car-cards">
            <CarCard />
            <CarCard />
            </div>

            
          </div>
        </section>

        <section className="dsct-section-comments">
          <div className="dsct-container-comments">
            <h2 className="dsct-section-title">O que estão dizendo</h2>
            <div className="dsct-comments">
              <CommentsCard/>
              <CommentsCard/>
              <CommentsCard/>
              <CommentsCard/>
              <CommentsCard/>

            </div>
          </div>
        </section>
      </main>


    </>
  );
}
