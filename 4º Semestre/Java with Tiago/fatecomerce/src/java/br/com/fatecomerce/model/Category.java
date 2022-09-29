package br.com.fatecomerce.model;

public class Category {

    private Integer idCategory;
    private String nameCategory;
    private String descriptionCategory;

    public Integer getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(Integer idCategory) {
        if (idCategory > 0) {
            this.idCategory = idCategory;
        } else {
            System.out.println("OLÁ MUNDO");
        }

    }

    public String getNameCategory() {
        return nameCategory;
    }

    public void setNameCategory(String nameCategory) {
        this.nameCategory = nameCategory;
    }

    public String getDescriptionCategory() {
        return descriptionCategory;
    }

    public void setDescriptionCategory(String descriptionCategory) {
        this.descriptionCategory = descriptionCategory;
    }

}
