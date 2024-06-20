let userName: string;
let anyUserInput: any;
let unknownUserInput: unknown;

anyUserInput = "aaaa";
anyUserInput = 2;
userName = anyUserInput; // The type is any, but there's no error

unknownUserInput = "Ihaa";
unknownUserInput = 3;

// userName = unknownUserInput;     // returns error

if (typeof unknownUserInput === "string") {
  userName = unknownUserInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError("An error occurred!", 500);
