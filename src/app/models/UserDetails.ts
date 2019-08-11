export class UserDetails {

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
    }

    export interface RootObject {
        id: string;
        email: string;
        username: string;
        password: string;
        nickName: string;
        allergies?: any;
        age: string;
        countryBorn: string;
        ethnicity?: any;
        disabilities?: any;
        dob: string;
        schoolName: string;
        address?: any;
        parentsDetails: ParentsDetails;
        previousPlayDates: PreviousPlayDate[];
    }

}

