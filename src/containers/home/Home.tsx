import styles from './Home.module.css';
import Form from '../../components/form/Form';
import Doctors from '../../components/doctors/Doctors';

const Home = () => {
    return (
        <div className={`${styles.home}`}>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <Form></Form>
                        <Doctors></Doctors>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
