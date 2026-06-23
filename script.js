let n = parseInt(prompt("Enter a number N:"));

        let sum = 0;

        for(let i = 1; i <= n; i++) {
            sum += i;
        }

        document.write("<h3>Sum of numbers from 1 to " + n + " is: " + sum + "</h3>");