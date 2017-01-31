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
 * @author Mike
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
            this.checkerBoard.setBoardWidth(this.board.getWidth());          
            this.checkerBoard.setBoardHeight(this.board.getHeight());
            updateDisplay();
        };
        
        //Initial CheckerBoard Init and Setup
        this.board.widthProperty().addListener(lambdaChangeListener);
        this.board.heightProperty().addListener(lambdaChangeListener);
        checkerBoard = new CheckerBoard(this.ROWS, this.COLS, this.board.getWidth(), this.board.getHeight());
        updateDisplay();
    }
    
    protected void updateDisplay(){
        //Update Board Display
        this.board.getChildren().clear();
        this.board.getChildren().addAll(checkerBoard.build().getChildren());
    }

    @FXML
    private void setGrid16x16(ActionEvent event){
        checkerBoard.setNumRows(16);
        checkerBoard.setNumCols(16);
        updateDisplay();
    }

    @FXML
    private void setGrid10x10(ActionEvent event){
        checkerBoard.setNumRows(10);
        checkerBoard.setNumCols(10);
        updateDisplay();
    }

    @FXML
    private void setGrid8x8(ActionEvent event){
        checkerBoard.setNumRows(8);
        checkerBoard.setNumCols(8);
        updateDisplay();
    }

    @FXML
    private void setGrid3x3(ActionEvent event){
        checkerBoard.setNumRows(3);
        checkerBoard.setNumCols(3);
        updateDisplay();
    }

    @FXML
    private void setColorDefault(ActionEvent event){
        checkerBoard.setColor(Color.RED, Color.BLACK);
        updateDisplay();
    }

    @FXML
    private void setColorBlue(ActionEvent event){
        checkerBoard.setColor(Color.SKYBLUE, Color.DARKBLUE);
        updateDisplay();
    }

}
