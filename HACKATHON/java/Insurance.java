public class Insurance {
    private String type;   // Health, Life, Motor, Property
    private double premium;
    private double coverage;
    private String renewalDate;

    public Insurance(String type, double premium, double coverage, String renewalDate) {
        this.type = type;
        this.premium = premium;
        this.coverage = coverage;
        this.renewalDate = renewalDate;
    }

    public String getRenewalReminder() {
        return "Policy " + type + " renews on " + renewalDate;
    }

    public double getPremium() {
        return premium;
    }

    public double getCoverage() {
        return coverage;
    }

}
