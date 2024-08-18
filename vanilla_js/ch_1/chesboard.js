function ChessBoard() {
    for (let i = 0; i < 8; i++) { // Loop through each row
        let row = ""; // Initialize an empty string for the row
        for (let j = 0; j < 8; j++) { // Loop through each column
            if ((i + j) % 2 === 0) {
                row += "#"; // Add a '#' if the sum of row and column index is even
            } else {
                row += " "; // Add a space if the sum of row and column index is odd
            }
        }
        console.log(row); // Print the row
    }
}

ChessBoard();
