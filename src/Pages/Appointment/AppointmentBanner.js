import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero lg:min-h-screen bg-hero-pattern">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-lg sm:max-w-sm lg:ml-5 rounded-lg shadow-2xl" alt='..' />
                <div className='md:text-center sm:text-center lg:text-left bg-white'>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />

                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;