package br.com.fatecomerce.model;

public class Brand {

    private Integer idBrand;
    private String nameBrand;

    public Integer getIdBrand() {
        return idBrand;
    }

    public void setIdBrand(Integer idBrand) {
        if (idBrand > 1 && idBrand <= 10) {
            this.idBrand = idBrand;
        } else {
            return;
        }
    }

    public String getNameBrand() {
        return nameBrand;
    }

    public void setNameBrand(String nameBrand) {
        if (nameBrand.length() > 2) {
            this.nameBrand = nameBrand;
        } else {
            return;
        }

    }

    public String getDescriptionBrand() {
        return descriptionBrand;
    }

    public void setDescriptionBrand(String descriptionBrand) {
        this.descriptionBrand = descriptionBrand;
    }
    private String descriptionBrand;

}
