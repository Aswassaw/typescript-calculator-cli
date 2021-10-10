import { question } from "readline-sync";

// Main function
function main(): void {
  // Get all input
  const firstString: string = question("Enter first number = ");
  const operator: string = question("Enter operator (+, -, *, /) = ");
  const secondString: string = question("Enter second number = ");

  // Checking if input valid
  if (isNumber(firstString) && isOperator(operator) && isNumber(secondString)) {
    // Calculating
    console.log("====================");
    console.log(calculate(firstString, operator, secondString));
  } else {
    // Return wrong message
    console.log("====================");
    console.log("Wrong input happen.");
  }

  // Ask for try again?
  console.log("====================");
  const again = question("Try Again? (y/n) = ");

  if (again == "y" || again == "yes") {
    console.log("====================");
    main();
  } else {console.log("====================");
    console.log("Have a nice day :)");
    return process.exit(0);
  }
}

// Calculate
function calculate(
  firstString: string,
  operator: string,
  secondString: string
): number {
  if (operator == "+") {
    return parseInt(firstString) + parseInt(secondString);
  } else if (operator == "-") {
    return parseInt(firstString) - parseInt(secondString);
  } else if (operator == "*") {
    return parseInt(firstString) * parseInt(secondString);
  } else if (operator == "/") {
    return parseInt(firstString) / parseInt(secondString);
  }

  return 0;
}

// Check if operator is operator
function isOperator(opr: string): boolean {
  if (opr == "+" || opr == "-" || opr == "*" || opr == "/") {
    return true;
  }

  return false;
}

// Check if input is number
function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);

  return isNum;
}

main();
