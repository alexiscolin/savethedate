// Interfaces
interface Theme {
    flower: string; 
    flower2: string; 
    bloom1: string; 
    bloom2: string; 
    background: string; 
    music: string; 
}

interface Entries {
    theme: string;
    texts: EntriesText;
    photos: EntriesPhotos;
}

interface EntriesText {
    wifeName: string;
    husbandName: string;
    intro: string;
    wifedateDayName: string;
    dateMonth: string;
    dateYear: string;
    invit: string;
    place: string;
}

interface EntriesPhotos {
    couple: string;
    invit: string;
    simple: string;
    triptic1: string;
    triptic2: string;
    triptic3: string;
}

export {
    Theme,
    Entries
}