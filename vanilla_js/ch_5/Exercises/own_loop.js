function Loop(value, test, update, operation) {
    if (!test(value)) return; // Base case: stop recursion if test fails
    
    operation(value);  // Perform the operation on the current value
    const newValue = update(value);  // Update the value
    Loop(newValue, test, update, operation);  // Recursively call Loop with the updated value
}

Loop(0, n => n < 4, n => n + 1, n => console.log(2 * n));
