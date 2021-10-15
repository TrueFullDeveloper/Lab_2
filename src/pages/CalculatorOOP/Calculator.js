export default class Calculator {
  constructor(calculatorField) {
    this.calculatorField = calculatorField;

    this.numberCalculatorList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    this.operations = ["÷", "×", "−", "+"];
  }

  getCalculatorField() {
    return this.calculatorField;
  }

  getNumberCalculatorList() {
    return this.numberCalculatorList;
  }

  getOperations() {
    return this.operations;
  }

  setCalculatorField(value) {
    this.calculatorField = this.calculatorField + value;
  }

  calculate() {
    if (this.calculatorField === "") return;

    let numberList = this.calculatorField
      .split(/[÷×−+]/)
      .map((numberItem) => Number(numberItem));

    let operationList = this.calculatorField
      .split(/[0-9]/)
      .filter((item) => this.operations.indexOf(item) + 1);

    if (operationList.length === 0) return;

    if (operationList.length >= numberList.length) {
      operationList.splice(-1, 1);
    }

    let i = 0;

    while (i < operationList.length) {
      if (operationList[i] === "÷") {
        numberList[i] = numberList[i] / numberList[i + 1];

        numberList.splice(i + 1, 1);
        operationList.splice(i, 1);
        i = 0;
      } else if (operationList[i] === "×") {
        numberList[i] = numberList[i] * numberList[i + 1];

        numberList.splice(i + 1, 1);
        operationList.splice(i, 1);
        i = 0;
      } else {
        i++;
      }
    }

    i = 0;

    while (i < operationList.length) {
      if (operationList[i] === "+") {
        numberList[i] = numberList[i] + numberList[i + 1];

        numberList.splice(i + 1, 1);
        operationList.splice(i, 1);
        i = 0;
      } else if (operationList[i] === "−") {
        numberList[i] = numberList[i] - numberList[i + 1];

        numberList.splice(i + 1, 1);
        operationList.splice(i, 1);
        i = 0;
      } else {
        i++;
      }
    }

    this.removeCalculatorField();
    this.setCalculatorField(numberList[0].toString());
  }

  removeCalculatorField() {
    this.calculatorField = "";
  }
}
