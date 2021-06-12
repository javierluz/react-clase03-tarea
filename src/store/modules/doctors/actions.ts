export const addDoctorAction = (doctor: any) => {
    return {
        type: "DOCTORS.ADD",
        payload: doctor,
    };
};

export const removeDoctorAction = (doctor?: any) => {
    return {
        type: "DOCTORS.REMOVE",
        payload: doctor,
    };
};
