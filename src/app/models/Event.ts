import {PreviousPlayDate} from "./UserDetails";

export interface Event {
    eventGuid?: string;
    when?: string;
    where?: string;
    description?: string;
    participants?: Participant[];
    base64Image?: string[];
    createdBy?: string;

}

export interface Participant {
    email?: string;
    status?: string;
}

export interface UpcomingEvent {
    when?: string;
    where?: string;
    description?: string;
    eventGuid?: string;
    status?: string;
}
