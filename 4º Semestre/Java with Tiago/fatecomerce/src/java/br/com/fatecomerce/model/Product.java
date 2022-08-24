package br.com.fatecomerce.model;

public class Product {

    private Integer idProduct;
    private String nameProduct;
    private String descriptionProduct;
    private Double amountProduct;
    private Integer quantityProduct;

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        if (idProduct <= 0) {
            return;
        } else {
            this.idProduct = idProduct;
        }
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getDescriptionProduct() {
        return descriptionProduct;
    }

    public void setDescriptionProduct(String descriptionProduct) {
        this.descriptionProduct = descriptionProduct;
    }

    public Double getAmountProduct() {
        return amountProduct;
    }

    public void setAmountProduct(Double amountProduct) {
        this.amountProduct = amountProduct;
    }

    public Integer getQuantityProduct() {
        return quantityProduct;
    }

    public void setQuantityProduct(Integer quantityProduct) {
        this.quantityProduct = quantityProduct;
    }
}
