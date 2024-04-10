import { SiHotelsdotcom } from 'react-icons/si';

function Logo() {
  return (
    <div className='border-2 border-black w-40'>
      <SiHotelsdotcom size={40} color='#2ec4b6'/>
      <h3 className='text-xl'>Hotel Booking</h3>
    </div>
  );
}

export default Logo;
