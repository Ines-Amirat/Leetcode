/**
 * @param {character[][]} grid
 * @return {number}
 */



grid = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]]



var valid = true
function validSudoku() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (grid[i][j] != ".") {
                for (var k = j + 1; k < 9; k++) {
                    if (grid[i][j] == grid[i][k]) {
                        valid = false
                        break
                    }
                }
                for (var k = i + 1; k < 9; k++) {
                    if (grid[i][j] == grid[k][j]) {
                        valid = false
                        break
                    }
                }
            
            }
        }
    }


    
    var x = 0
    var t = 0
    for (var l = 0; l < 3; l++) {
        for (var w = 0; w < 3; w++) {
            for (var i = x; i < x + 3; i++) {
                for (var j = t; j < t + 3; j++) {
                    if (grid[i][j] != ".") {
                        for (var n = x; n < x+3; n++) {
                            for (var m = t; m < t+3; m++) {
                                if (i != n || j != m) {
                                    if (grid[i][j] == grid[n][m]) {
                                        valid = false
                                        break
                                    }
                                }
                            }
                        }

                    }
                }
            }
            t = t + 3

        }
        t = 0
        x = x + 3

    }


    if (valid == true) {
        console.log("valid")
    }
    else {
        console.log("not valid")
    }





}


validSudoku()


