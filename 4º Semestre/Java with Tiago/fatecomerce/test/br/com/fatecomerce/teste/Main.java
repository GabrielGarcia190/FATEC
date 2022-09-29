/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.fatecomerce.teste;

import br.com.fatecomerce.model.Brand;
import br.com.fatecomerce.model.Category;
import br.com.fatecomerce.model.Product;
import br.com.fatecomerce.util.ConnectionFactory;
import java.sql.Connection;

/**
 *
 * @author gokug
 */
public class Main {

    public static void main(String[] args) {
        
        
        
        /*Category c1 = new Category();
        c1.setIdCategory(-10);
        c1.setNameCategory("Carne");
        c1.setDescriptionCategory("Coisa deliciosa .........");
        
        
        Brand n1 = new Brand();
        n1.setIdBrand(12);
        n1.setNameBrand("Friboi");
        n1.setDescriptionBrand("NADA NÃO");
        
        System.out.println("ID: " + n1.getIdBrand() + "\nNomeBrand: " 
                + n1.getNameBrand() + "\nDescrição: " + n1.getDescriptionBrand());
        
        Product p1 = new Product();
        p1.setIdProduct(1);
        p1.setNameProduct("O Meu C#");
        p1.setDescrptionProduct("Ola Mundo");
        p1.setCostPriceProduct(1.00);
        p1.setSalePriceProduct(10.00);
        p1.setBrand(n1);
        p1.setCategory(c1);
        System.out.println("ID:" + p1.getIdProduct() + "\nNome Produto: " 
                + p1.getNameProduct() + "\n Descrição" + p1.getDescrptionProduct()
        + "\nPeso de Custo: R$ " + p1.getCostPriceProduct() + "\nPreço de Venda: R$ "
        + p1.getSalePriceProduct() + "\ncategoria: " + p1.getCategory() 
        + "\nMarca: " + p1.getBrand().getNameBrand() + "\nCategoria"
        + p1.getCategory().getNameCategory());*/
        
        
        Connection conn = null;
        
        try {
            conn = ConnectionFactory.getConnection();
            System.out.println("Conectado com sucesso");
        } catch (Exception ex) {
            System.out.println("Deu ruim");
            ex.printStackTrace();
        }
       
        
        
    }
    
    
}
