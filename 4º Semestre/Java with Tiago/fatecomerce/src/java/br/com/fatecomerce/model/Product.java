package br.com.fatecomerce.model;

public class Product {

    private Integer idProduct;
    private String nameProduct;
    private String descrptionProduct;
    private Double costPriceProduct;
    private Double salePriceProduct;
    private Brand brand;
    private Category category;

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public String getDescrptionProduct() {
        return descrptionProduct;
    }

    public void setDescrptionProduct(String descrptionProduct) {
        this.descrptionProduct = descrptionProduct;
    }

    public Double getCostPriceProduct() {
        return costPriceProduct;
    }

    public void setCostPriceProduct(Double costPriceProduct) {
        this.costPriceProduct = costPriceProduct;
    }

    public Double getSalePriceProduct() {
        return salePriceProduct;
    }

    public void setSalePriceProduct(Double salePriceProduct) {
        this.salePriceProduct = salePriceProduct;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}
