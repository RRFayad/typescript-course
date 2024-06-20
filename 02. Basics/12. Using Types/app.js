var userName;
var anyUserInput;
var unknownUserInput;
anyUserInput = "aaaa";
anyUserInput = 2;
userName = anyUserInput;
unknownUserInput = "Ihaa";
unknownUserInput = 3;
userName = unknownUserInput;
if (typeof unknownUserInput === "string") {
    userName = unknownUserInput;
}
