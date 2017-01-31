/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package msr5zbcheckers;

import javafx.scene.layout.AnchorPane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Rectangle;

/**
 *
 * @author Mike
 */
public class CheckerBoard {

    //Vars
    private AnchorPane board;
    private int numRows;
    private int numCols;
    private double boardWidth;
    private double boardHeight;
    private Color lightColor;
    private Color darkColor;
    private double rectangleWidth;
    private double rectangleHeight;
      
    //Getters
    public AnchorPane getBoard(){return board;}
    public int getNumRows(){return numRows;}
    public int getNumCols(){return numCols;}	
    public double getWidth(){return boardWidth;}	
    public double getHeight(){return boardHeight;}	
    public Color getLightColor(){return lightColor;}
    public Color getDarkColor(){return darkColor;}	
    public double getRectangleWidth(){return rectangleWidth;}	
    public double getRectangleHeight(){return rectangleHeight;}	

    //Setters
    public void setBoardWidth(double boardWidth){this.boardWidth = boardWidth;}   
    public void setBoardHeight(double boardHeight){this.boardHeight = boardHeight;}   
    public void setNumRows(int rows){this.numRows = rows;}   
    public void setNumCols(int cols){this.numCols = cols;} 
    public void setColor(Color lightColor, Color darkColor){this.lightColor = lightColor; this.darkColor = darkColor;} 
    
    private void updateRectangleSize(){
        this.rectangleWidth = (boardWidth / numRows);
        this.rectangleHeight = (boardHeight / numCols);
    }
    
    //Default Constructor
    public CheckerBoard(int numRows, int numCols, double boardWidth, double boardHeight){
        this.numRows = numRows;
        this.numCols = numCols;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.lightColor = Color.RED;
        this.darkColor = Color.BLACK;
    }
    
    //Default Constructor with Specified Colors
    public CheckerBoard(int numRows, int numCols, double boardWidth, double boardHeight, Color lightColor, Color darkColor){
        this(numRows, numCols, boardWidth, boardHeight);
        this.lightColor = lightColor;
        this.darkColor = darkColor;
    }
    
    //Builds, Produces a new AnchorPane (CheckerBoard)
    public AnchorPane build(){
        
        double translateX;   
        double translateY = 0;
        this.board = new AnchorPane();
        updateRectangleSize();
        
        for (int row = 0; row < this.numRows; row++){
            translateX = 0;
            for (int col = 0; col < this.numCols; col++){
                Rectangle rect = new Rectangle(this.rectangleWidth, this.rectangleHeight);
                rect.setTranslateX(translateX);
                rect.setTranslateY(translateY);
                if((row%2 == 0 && col%2 == 0) || (row%2 == 1 && col%2 == 1)){
                    rect.setFill(this.lightColor);
                    board.getChildren().add(rect);
                }else{
                    rect.setFill(this.darkColor);
                    board.getChildren().add(rect);
                }
                translateX = translateX + this.rectangleWidth;
            }
            translateY = translateY + this.rectangleHeight;
        }
        
        return this.board;
    }
    
   

}
