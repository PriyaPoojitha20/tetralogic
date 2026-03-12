public class Estate {
     private String assetType;   // Property, Bank Account, Jewelry
    private double value;
    private String nominee;

    public Estate(String assetType, double value, String nominee) {
        this.assetType = assetType;
        this.value = value;
        this.nominee = nominee;
    }

    public String getDetails() {
        return assetType + " worth ₹" + value + " nominated to " + nominee;
    }

}
