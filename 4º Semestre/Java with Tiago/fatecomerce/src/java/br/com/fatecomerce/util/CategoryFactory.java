package br.com.fatecomerce.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class CategoryFactory {

    public static Connection getConnection() throws Exception {
        try {
            Class.forName("org.postgressql.Driver");
            return DriverManager.getConnection("jdbc:postgresql://localhost:5432/db_fatecomerce", "postgres", "1234");
        } catch (Exception ex) {
            throw new Exception(ex.getMessage());
        }
    }
}
