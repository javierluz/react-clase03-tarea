import styles from './Doctors.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { removeDoctorAction } from '../../store/modules/doctors/actions';
import { doctorsSelector } from '../../store/modules/doctors/selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Doctors = () => {
    const doctors: any = useSelector(doctorsSelector);
    console.log(doctors.doctors);
    const dispatch = useDispatch();
    
    const handlerRemoveDoctorClick = (doctor: any) => {
        // event.preventDefault();
        
        dispatch(removeDoctorAction(doctor));
    }

    return (
        <div className={`${styles.doctorsContainer}`}>
            <h1 className="h3">Doctors already called</h1>
            
            {
                doctors.doctors.length ? 
                    doctors.doctors.map((doctor: any, i: number) => (
                        <div key={i} className="card mb-2">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="mb-0 d-flex align-items-center">{doctor.name} <span className={`ms-2 fs-8 badge bg-${doctor.number? 'dark' : 'secondary'} ${styles.badgeSmall}`}>{doctor.number ? doctor.number : 'Unknown'}</span></h5>
                                
                                <div className="actions">
                                    <button onClick={() => handlerRemoveDoctorClick(doctor)} className="btn btn-secondary btn-sm">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                : 
                <div className="alert alert-info">
                    <p className="mb-0"><strong>Oopsie!</strong> Looks like every Doctor is currently lost in Space &amp; Time. Please wait a few thousand years (give or take) ⏰.</p>
                </div>
            }
        </div>
    );
}

export default Doctors;
