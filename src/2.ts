class Employee {
  // Заповніть модифікатори доступу

  constructor(
    public name: string,
    private department: string,
    protected salary: number) {
    
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
  constructor(
    name: string,
    department: string,
    salary: number
  ) {
    super(name, department, salary);
    this.salary += 10_000;
  }

}


export {};