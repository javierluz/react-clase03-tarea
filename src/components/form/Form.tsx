import styles from './Form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { addDoctorAction } from '../../store/modules/doctors/actions';
import { useState } from 'react';
// import { doctorsSelector } from '../../store/modules/doctors/selectors';


const Form = () => {
    // const doctors: any = useSelector(doctorsSelector);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handlerChangeName = (event: any) => {
        const value = event.target.value;
        setName(value);
    }
    const handlerChangeNumber = (event: any) => {
        const value = event.target.value;
        setNumber(value);
    }

    const handlerAddDoctorSubmit = (event: any) => {
        event.preventDefault();
        dispatch(addDoctorAction({
            id: new Date().getTime(),
            name,
            number,
        }));

        // Clear Local Input
        setName('');
    }

    return (
        <div className={`${styles.formContainer} mb-4`}>
            <div className="p-4">
                <h1 className="h3 mb-2">Call Doctors back to Earth</h1>
                
                <form noValidate onSubmit={handlerAddDoctorSubmit}>
                    <div className="row">
                        <div className="col-lg-9">
                            <label htmlFor="new-doctor-name">Name</label>
                            <div className={`${styles.formGroupAdd} form-group mb-2`}>
                                <input type="text" id="new-doctor-name" name="new-doctor-name" className="form-control" placeholder="I.e. Peter Capaldi" value={name} onChange={handlerChangeName} />

                                <div className={`${styles.areaIcon}`}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <label htmlFor="new-doctor-number">Number</label>
                            <div className={`${styles.formGroupAdd} form-group mb-2`}>
                                <input type="text" id="new-doctor-number" name="new-doctor-number" className="form-control" placeholder="I.e. 10th" value={number} onChange={handlerChangeNumber} />
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="btn btn-primary btn-sm" type="submit">Call now!</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
