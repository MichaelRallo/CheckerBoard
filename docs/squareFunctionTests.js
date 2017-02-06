When a Checker is Clicked…
if(this.getCheckerColor() == player.getColor()){
    if(this.getCheckerType == NORMAL){ //Check Forward Moves
    
        //Bottom Player
        if(this.getCheckerside() == BOTTOM){ //Up is Forward

            //Check Up Left - Normal Move
            if(this.getSquare().isOpen(board, this, this.getSquare().getUpLeftIndex())){legalMoves.add(this.getSquare().getUpLeftIndex());}

            //Check Up Right - Normal Move
            if(this.getSquare().isOpen(board, this, this.getSquare().getUpRightIndex())){legalMoves.add(this.getSquare().getUpRightIndex());}
            
            //Check Jump
            do(this.canJumpForward()){
                //Check Left
                if(canForwardJump()){}
                //Check Right
                
                
            }while(this.canJumpForward())

        } //Else it's Top Player
        else{ //Down is Forward
            //Check Down Left
            if(this.getSquare().isOpen(board, this, this.getSquare().getDownLeftIndex())){legalMoves.add(this.getSquare().getDownLeftIndex());}

            //Check Down Right
            if(this.getSquare().isOpen(board, this, this.getSquare().getDownRightIndex())){legalMoves.add(this.getSquare().getDownRightIndex());}
        }
    } //Else it's King Checker 
    else{ //Check All Cases
        //Check Up Left
        if(this.getSquare().isOpen(board, this, this.getSquare().getUpLeftIndex())){legalMoves.add(this.getSquare().getUpLeftIndex());}

        //Check Up Right
        if(this.getSquare().isOpen(board, this, this.getSquare().getUpRightIndex())){legalMoves.add(this.getSquare().getUpRightIndex());}

        //Check Down Left
        if(this.getSquare().isOpen(board, this, this.getSquare().getDownLeftIndex())){legalMoves.add(this.getSquare().getDownLeftIndex());}

        //Check Down Right
        if(this.getSquare().isOpen(board, this, this.getSquare().getDownRightIndex())){legalMoves.add(this.getSquare().getDownRightIndex());}
    }
}


int index;

public int getUpLeftIndex(){index - rowLength - 1}
public int getUpRightIndex(){index - rowLength + 1}
public int getDownLeftIndex(){index + rowLength - 1}
public int getDownRightIndex(){index + rowLength + 1}
    
public int getUpLeftJumpIndex(){index - (2*rowLength - 2}
public int getUpRightJumpIndex(){index - (2*rowLength + 2}
public int getDownLeftJumpIndex(){index + (2*rowLength - 2}
public int getDownRightJumpIndex(){index + (2*rowLength + 2}
                                            
public boolean isOpen(Board board, Checker checker, int workingIndex){
    if(workingIndex >= 0 && workingIndex < (board.getRows()*board.getCols()-1)
       board[workingIndex].getSquareColor == darkColor &&
       board[workingIndex].getChecker() == null){
            return true;
    }
}

public boolean isEnemy(Board board, Checker checker, int workingIndex){
    if(workingIndex >= 0 && workingIndex < (board.getRows()*board.getCols()-1)
       board[workingIndex].getSquareColor == darkColor &&
       board[workingIndex].getChecker() != null) &&
       board[workingIndex].getChecker().getColor() != checker.getColor(){
            return true;
    }
}



forwardJump


public List int checkJumps(Board board, Checker checker, int enemyIndex, int landingIndex){
    if(this.isEnemny)

    
}














