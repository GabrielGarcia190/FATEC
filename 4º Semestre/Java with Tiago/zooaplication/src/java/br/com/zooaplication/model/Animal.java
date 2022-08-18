package br.com.zooaplication.model;

public class Animal {

    private Integer idAnimal;
    private String nameAnimal;
    private String speciesAnimal;
    private Double weightAnimal;
    private Integer ageAnimal;

    public Integer getIdAnimal() {
        return idAnimal;
    }

    public void setIdAnimal(Integer idAnimal) { 
        this.idAnimal = idAnimal;
    }

    public String getNameAnimal() {
        return nameAnimal;
    }

    public void setNameAnimal(String nameAnimal) {
        this.nameAnimal = nameAnimal;
    }

    public String getSpeciesAnimal() {
        return speciesAnimal;
    }

    public void setSpeciesAnimal(String speciesAnimal) {
        this.speciesAnimal = speciesAnimal;
    }

    public Double getWeightAnimal() {
        return weightAnimal;
    }

    public void setWeightAnimal(Double weightAnimal) {
        this.weightAnimal = weightAnimal;
    }

    public Integer getAgeAnimal() {
        return ageAnimal;
    }

    public void setAgeAnimal(Integer ageAnimal) {
        this.ageAnimal = ageAnimal;
    }
    
}
