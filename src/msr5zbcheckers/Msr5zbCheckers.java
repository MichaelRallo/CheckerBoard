/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package msr5zbcheckers;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

/**
 *
 * @author Mike msr5zb 12358133
 */
public class Msr5zbCheckers extends Application {
    
    @Override
    public void start(Stage stage) throws Exception {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("Checkers.fxml"));
        Parent root = loader.load();
        CheckersController controller = loader.getController();
              
        Scene scene = new Scene(root);
       
        stage.setTitle("Checkers");
        stage.setScene(scene);
        stage.show();
        controller.ready(stage);
    }

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        launch(args);
    }
    
}
