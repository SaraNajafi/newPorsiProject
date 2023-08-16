
// export class HttpError extends Error {

//     constructor(public status: number, public message: string) {
//         super(message);
//     }


// }

export class HttpError extends Error {
    constructor(public status: number, public message: string){
        super();// inja nabayad dakhele super chizi bezaram
    }
}

export class ForbiddenErr extends HttpError {

    constructor(){
        super(403, "Forbidden");
    }
}