import ReactAnimatedWeather from 'react-animated-weather';
import './App.css';

function WeatherAni() {
  return (
    <div className='Anim'>

      <ReactAnimatedWeather 
        icon="PARTLY_CLOUDY_DAY"
        color="goldenrod"
        size={200}
        animate={true}
      />
    </div>
  );
}

export default WeatherAni