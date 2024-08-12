import './styles.css'
import carImg from '../../assets/car.png'

export default function CarCard() {
  return (
    <div className="dsct-card">
      <img src={carImg} alt="carro" />
      <h2>Lorem ipsum dolor</h2>
    </div>
  );
}
