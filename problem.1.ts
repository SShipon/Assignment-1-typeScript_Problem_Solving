// function repeatString(str: string, num: number): string {
//     let result: string = "";
//     for (let i = 0; i < num; i++) {
//         result += str;
//     }
//     return result;
// }

// console.log(repeatString("Hello!", 3));




function repeatString(str: string, num: number): string {
    if (num < 0) {
        throw new Error("Number of repetitions must be a non-negative integer.");
    }

    return str.repeat(num);
}

// Test the function with error handling
try {
    console.log(repeatString("Hello!", 3)); // Output: "Hello!Hello!Hello!"
    console.log(repeatString("Hello!", -2)); // error handel
} catch (error) {
    console.error(error.message); // Output: "Number of repetitions must be a non-negative integer."
}


