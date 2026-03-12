public class Loan {
    private double principal;
    private double rate;
    private int months;

    public Loan(double principal, double rate, int months) {
        this.principal = principal;
        this.rate = rate;
        this.months = months;
    }

    public double calculateEMI() {
        double monthlyRate = rate / 12 / 100;
        return (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
               (Math.pow(1 + monthlyRate, months) - 1);
    }

}
