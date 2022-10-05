package br.com.fatecomerce.DAO;

import br.com.fatecomerce.model.Brand;
import br.com.fatecomerce.util.ConnectionFactory;
import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class BrandDAOImpl implements GenericDAO {

    private Connection conn;

    public BrandDAOImpl() {
        try {
            this.conn = ConnectionFactory.getConnection();
            System.out.println("Conectado com sucesso");
        } catch (Exception e) {
            System.out.println("Problemasao conectar no BD Erro: " + e.getMessage());
            e.printStackTrace();
        }

    }

    @Override
    public Boolean save(Object object) {
        
        Brand brand = (Brand) object;
        PreparedStatement stmt = null;

        String sql = "INSERT INTO public.brand(name_brand, description_brand) VALUES (?, ?);";
        
        try {
            stmt = conn.prepareStatement(sql);
            stmt.setString(1, brand.getNameBrand());
            stmt.setString(2, brand.getDescriptionBrand());
            stmt.executeUpdate();
            return true;
        } catch (SQLException e) {
            System.out.println("Problemas ao cadastro Brand! Erro: "+ e.getMessage());
            e.printStackTrace();
            return false;
        } finally{
            try{
                ConnectionFactory.closeConnection(conn, stmt);
            }catch(Exception ex){
                System.out.println("Promas ao fechar conexão");
                ex.printStackTrace();
            }
        }
    }
    

    @Override
    public List<Object> findAll() {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public void deleteById(Integer idObject) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Object findById(Integer idObject) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Boolean update(Object object) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

}
