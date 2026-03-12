public class Investment {
    private String type;   // Mutual Fund, Stock, Gold, Real Estate
    private double amount;
    private double rate;
    private int years;

    public Investment(String type, double amount, double rate, int years) {
        this.type = type;
        this.amount = amount;
        this.rate = rate;
        this.years = years;
    }

    public double calculateReturns() {
        return amount * Math.pow((1 + rate/100), years);
    }

    public String getType() { return type; }

}
