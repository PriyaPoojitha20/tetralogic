public class TestApp {
    public static void main(String[] args) {
        IncomeExpense salary = new IncomeExpense("Income", 50000, "Salary", "12-03-2026");
        Investment inv = new Investment("Mutual Fund", 10000, 12, 5);
        Loan loan = new Loan(500000, 8, 120);

        System.out.println("Transaction: " + salary.getType() + " ₹" + salary.getAmount());
        System.out.println("Investment Return: ₹" + inv.calculateReturns());
        System.out.println("Loan EMI: ₹" + loan.calculateEMI());
        System.out.println("Tax on 6L income: ₹" + Tax.calculateTax(600000));
    }


}
