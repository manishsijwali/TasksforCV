import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Employee {

    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Employee Name: " + name);
        System.out.println("Employee Salary: $" + salary);
        System.out.println("-------------------------------");
    }
}

public class EmployeeManagementSystem {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Employee> employeeList = new ArrayList<>();

        for (int i = 0; i < 3; i++) {
            System.out.println("Enter details for Employee " + (i + 1));

            System.out.print("Enter ID: ");
            int id = scanner.nextInt();

            scanner.nextLine();

            System.out.print("Enter Name: ");
            String name = scanner.nextLine();

            System.out.print("Enter Salary: ");
            double salary = scanner.nextDouble();

            Employee emp = new Employee(id, name, salary);
            employeeList.add(emp);

            System.out.println();
        }

        System.out.println("Employee Details:");
        for (Employee emp : employeeList) {
            emp.displayDetails();
        }

        // Close the scanner to avoid resource leak
        scanner.close();
    }
}
