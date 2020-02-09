export interface ParentsDetails {
    fatherName: string;
    motherName: string;
    fatherOccupation: string;
    motherOccupation: string;
    fatherContactNumber: string;
    motherContactNumber: string;
    fatherAge: string;
    motherAge: string;
}

export interface PreviousPlayDate {
    when: string;
    where: string;
    duration: string;
    with?: any;
}

export interface PlaydatesRequestedByMe {
    when: string;
    where: string;
    description: string;
    status?: any;
    requestedBy?: any;
    requestedTo: string;
    base64Image?: any;
}

export interface PlaydatesRequestedByOther {
    when?: string;
    where?: string;
    description?: string;
    status?: any;
    requestedBy?: string;
    requestedTo?: any;
    base64Image?: any;
}

export interface Address {
    street?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    country?: string;
}
export interface UserDetails {
    id?: string;
    email?: string;
    username?: string;
    password?: string;
    nickName?: string;
    allergies?: any;
    age?: string;
    countryBorn?: string;
    ethnicity?: string;
    disabilities?: any;
    dob?: string;
    schoolName?: string;
    address?: Address;
    parentsDetails?: ParentsDetails;
    previousPlayDates?: PreviousPlayDate[];
    imageFileBinary?: string;
    playdatesRequestedByMe?: PlaydatesRequestedByMe[];
    playdatesRequestedByOthers?: PlaydatesRequestedByOther[];
}

