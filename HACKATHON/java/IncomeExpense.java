public class IncomeExpense {
    private String type;   // Income or Expense
    private double amount;
    private String category;
    private String date;

    public IncomeExpense(String type, double amount, String category, String date) {
        this.type = type;
        this.amount = amount;
        this.category = category;
        this.date = date;
    }

    public double getAmount() { return amount; }
    public String getType() { return type; }
    public String getCategory() { return category; }
    public String getDate() { return date; }
}

