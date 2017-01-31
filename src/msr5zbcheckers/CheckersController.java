/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package msr5zbcheckers;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.MenuBar;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.stage.Stage;

/**
 * FXML Controller class
 *
 * @author Mike msr5zb 12358133
 */
public class CheckersController implements Initializable {

    @FXML
    private MenuBar menu;
    @FXML
    private VBox gameVBox;
    @FXML
    private AnchorPane board;

    private CheckerBoard checkerBoard;
    private final int ROWS = 8;
    private final int COLS = 8;
    
    
    /**
     * Initializes the controller class.
     */
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
    }    
    
    public void ready(Stage stage) {
        //Resize Change Listener.
        ChangeListener<Number> lambdaChangeListener = (ObservableValue<? extends Number> observable, Number oldValue, final Number newValue) -> {
            checkerBoard.setBoardWidth(board.getWidth());          
            checkerBoard.setBoardHeight(board.getHeight());
            updateDisplay();
        };
        
        //Initial CheckerBoard Init and Setup
        board.widthProperty().addListener(lambdaChangeListener);
        board.heightProperty().addListener(lambdaChangeListener);
        checkerBoard = new CheckerBoard(ROWS, COLS, board.getWidth(), board.getHeight());
        updateDisplay();
    }
    
    //Update Board Display
    protected void updateDisplay(){
        this.board.getChildren().clear();
        this.board.getChildren().addAll(checkerBoard.build().getChildren());
    }
    
    //Update Grid Size
    protected void updateGridSize(int rows, int cols){
        checkerBoard.setNumRows(rows);
        checkerBoard.setNumCols(cols);
        updateDisplay();
    }
    
    //Update Color Scheme
    protected void updateColor(Color lightColor, Color darkcolor){
        checkerBoard.setColor(lightColor, darkcolor);
        updateDisplay();
    }    

    @FXML
    private void setGrid16x16(ActionEvent event){updateGridSize(16, 16);}

    @FXML
    private void setGrid10x10(ActionEvent event){updateGridSize(10, 10);}
    
    @FXML
    private void setGrid8x8(ActionEvent event){updateGridSize(8, 8);}

    @FXML
    private void setGrid3x3(ActionEvent event){updateGridSize(3, 3);}

    @FXML
    private void setColorDefault(ActionEvent event){updateColor(Color.RED, Color.BLACK);}
    
    @FXML
    private void setColorBlue(ActionEvent event){updateColor(Color.SKYBLUE, Color.DARKBLUE);}


}
