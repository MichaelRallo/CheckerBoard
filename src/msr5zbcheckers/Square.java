/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package msr5zbcheckers;

/**
 *
 * @author Mike
 */
public class Square {
    //0 = No Checker, 1 = Player1Checker, 2 = Player2Checker, 3 = Player1King, 4 = Player2King
    byte checker;

    public int getUpLeftIndex(int rowLength, int startingIndex){return (startingIndex - rowLength - 1);}
    public int getUpRightIndex(int rowLength, int startingIndex){return (startingIndex - rowLength + 1);}
    public int getDownLeftIndex(int rowLength, int startingIndex){return (startingIndex + rowLength - 1);}
    public int getDownRightIndex(int rowLength, int startingIndex){return (startingIndex + rowLength + 1);}

    public int getUpLeftJumpIndex(int rowLength, int startingIndex){return (startingIndex - (2*rowLength) - 2);}
    public int getUpRightJumpIndex(int rowLength, int startingIndex){return (startingIndex - (2*rowLength) + 2);}
    public int getDownLeftJumpIndex(int rowLength, int startingIndex){return (startingIndex + (2*rowLength) - 2);}
    public int getDownRightJumpIndex(int rowLength, int startingIndex){return (startingIndex + (2*rowLength) + 2);}

    public byte getChecker(){return checker;}
    public void setChecker(byte checkerType){checker = checkerType;}
    
    public boolean isOpen(){
        return (checker == 0);
    }
    public boolean isEnemy(byte startingChecker){

        if(startingChecker == 1 || startingChecker == 3){
            return(this.checker == 2 || this.checker == 4);
        }

        if(startingChecker == 2 || startingChecker == 4){
            return (this.checker == 1 || this.checker == 3);
        }
            
        return false;
    } 
    
    public boolean isValid(int workingIndex, int maxIndex){
        return((workingIndex > 0) && (workingIndex%2 == 1) && (workingIndex <= maxIndex));
    }
}
