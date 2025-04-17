export function taskFirst() {
    // Use const here, indent with 2 spaces
    var task = 'I prefer const when I can.';
    // Indent with 2 spaces
    return task;
}

export function getLast() {
    // Indent with 2 spaces
    return ' is okay';
}

export function taskNext() {
    // Use let here, indent with 2 spaces
    var combination = 'But sometimes let';
    // Indent with 2 spaces
    combination += getLast();
    // Indent with 2 spaces
    return combination;
}