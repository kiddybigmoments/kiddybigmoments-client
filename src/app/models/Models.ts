export interface Parents {
    mother: String;
    father: String;
}

export interface Kid {
    parents: Parents;
    firstName: String;
    lastName: String;
}

export interface Photo {
    kids: Kid[];
    title: String;
    description: String;
    imageLocation: String;
}


