import data from "./data.json";

const initialState = {
    doctors: data.doctors,
};
const doctorsReducer = (prevState: any = initialState, action: any) => {
    switch (action.type) {
        case "DOCTORS.ADD":
            return {
                doctors: [...prevState.doctors, action.payload],
            };
            break;
        case "DOCTORS.UPDATE":
            const id = action.payload.id;
            const nL = prevState.doctors.map((d: any) => {
                if (d.id === id) return action.payload;

                return d;
            });
            break;
        case "DOCTORS.REMOVE":
            // Se hace con un filter
            const newDoctors = prevState.doctors.filter(
                (doctor: any) => doctor.id !== action.payload.id
            );

            return {
                doctors: newDoctors,
            };
            break;
        default:
            return prevState;
            break;
    }

    return {
        doctors: [],
    };
};

export default doctorsReducer;
