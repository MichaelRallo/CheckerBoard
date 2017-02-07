When a Checker is Clicked…

list<int> legalMoves;
list<int> jumpMoves;
if(this.getCheckerColor() == player.getColor()){
    if(this.getCheckerType == NORMAL){ //Check Forward Moves
    
        //Bottom Player
        if(this.getCheckerside() == BOTTOM){ //Up is Forward

            //Check Up Left - Normal Move
            if(this.getSquare().isOpen(board, this, this.getSquare().getUpLeftIndex())){legalMoves.add(this.getSquare().getUpLeftIndex());}

            //Check Up Right - Normal Move
            if(this.getSquare().isOpen(board, this, this.getSquare().getUpRightIndex())){legalMoves.add(this.getSquare().getUpRightIndex());}
            
  
            //Check Jump Up Left
            if(canForwardJump()){}
            //Check Jump Up Right
                
                
            }while(this.canJumpForward())

        } //Else it's Top Player
        else{ //Down is Forward
            //Check Down Left
            if(this.getSquare().isOpen(board, this, this.getSquare().getDownLeftIndex())){legalMoves.add(this.getSquare().getDownLeftIndex());}

            //Check Down Right
            if(this.getSquare().isOpen(board, this, this.getSquare().getDownRightIndex())){legalMoves.add(this.getSquare().getDownRightIndex());}
            
            //Check Jump Down Left
            
            //Check Jump Down Right
            
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

        //Check Jump Up Left
        //Check Jump Up Right
        //Check Jump Down Left
        //Check Jump Down Right
        
    }
}

When user chooses a square the exists in legalMoves, continue. If square index is also in jumpMoves, Calculate jumps moves again to see if can multijump.

int index;

public int getUpLeftIndex(){index - rowLength - 1}
public int getUpRightIndex(){index - rowLength + 1}
public int getDownLeftIndex(){index + rowLength - 1}
public int getDownRightIndex(){index + rowLength + 1}
    
public int getUpLeftJumpIndex(){index - (2*rowLength - 2}
public int getUpRightJumpIndex(){index - (2*rowLength + 2}
public int getDownLeftJumpIndex(){index + (2*rowLength - 2}
public int getDownRightJumpIndex(){index + (2*rowLength + 2}
                                            
public boolean isEmpty(Board board, Checker checker, int workingIndex){
    if(workingIndex >= 0 && workingIndex < (rowLength()*board.getCols()-1)
       board[workingIndex].getSquareColor == darkColor &&
       board[workingIndex].getChecker() == null){
            return true;
    }
}

public boolean isEnemy(Board board, Checker checker, int workingIndex){
    if(workingIndex >= 0 && workingIndex < (rowLength()*board.getCols()-1)
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
















Class Square(){
    
    byte checker;

    public int getUpLeftIndex(int rowLength, int startingIndex){startingIndex - rowLength - 1}
    public int getUpRightIndex(int rowLength, int startingIndex){startingIndex - rowLength + 1}
    public int getDownLeftIndex(int rowLength, int startingIndex){startingIndex + rowLength - 1}
    public int getDownRightIndex(int rowLength, int startingIndex){startingIndex + rowLength + 1}

    public int getUpLeftJumpIndex(int rowLength, int startingIndex){startingIndex - (2*rowLength) - 2}
    public int getUpRightJumpIndex(int rowLength, int startingIndex){startingIndex - (2*rowLength) + 2}
    public int getDownLeftJumpIndex(int rowLength, int startingIndex){startingIndex + (2*rowLength) - 2}
    public int getDownRightJumpIndex(int rowLength, int startingIndex){startingIndex + (2*rowLength) + 2}

    public byte getChecker(){return checker;}
    public void setChecker(byte checkerType){checker = checkerType}
    
    public boolean isOpen(){this.checker = 0 ? true : false;}
    public boolean isEnemy(byte startingChecker){

        if(startingChecker == 1 || startingChecker == 3)
            if(this.checker == 2 || this.checker == 4)
                return true;

        else if(startingChecker == 2 || startingChecker == 4)
            if(this.checker == 1 || this.checker == 3)
                return true;

        else
            return false;
    } 
    
}

    
    
public boolean isValid(int workingIndex, int maxIndex){workingIndex>0 && workingIndex%2==1 && workingIndex<=maxIndex ? true : false}





Square.onclick(function(){
    Checker Clicked
    int index = getIndex(this.translationX, this.translationY);
    
    List<int> legalMoves() = new ArrayList<int>();
    List<int> jumpMoves() = new ArrayList<int>();

    int upLeft = board[index].getUpLeftIndex();
    int upRight = board[index].getUpRightIndex();
    int downLeft = board[index].getDownLeftIndex();
    int downRight = board[index].getDowbRightIndex();
    
    int upLeftJump = board[index].getUpLeftIndex();
    int upRightJump = board[index].getUpRightIndex();
    int downLeftJump = board[index].getDownLeftIndex();
    int downRightJump = board[index].getDowbRightIndex();

    //Note player1 always starts at bottom.
    if(player1Turn()){
        //Normal Checker
        if(board[index].checker == 1 || board[index].checker == 3){

            
            //Check Up Left - Normal Forward Move
            if(isValid(upLeft, board.size()) && board[upLeft].isOpen()){
                legalMoves.add(upLeft);
            }

            //Check Up Right - Normal Forward Move
            if(isValid(upRight, board.size()) && board[upRight].isOpen()){
                legalMoves.add(upRight);
            }
            
            //Check Up Left Jump
            if( isValid(upLeft, board.size()) && board[upLeft].isEnemy(board[index].getChecker()) &&
                isValid(upLeftJump, board.size()) && board[upLeftJump].isOpen()){
                
                legalMoves.add(upLeftJump);
                jumpMoves.add(upLeftJump);
            }
            
            //Check Up Right Jump
            if( isValid(upRight, board.size()) && board[upRight].isEnemy(board[index].getChecker()) &&
                isValid(upRightJump, board.size()) && board[upRightJump].isOpen()){
                
                legalMoves.add(upRightJump);
                jumpMoves.add(upRightJump);
            }
            
        }
        
        //King Checker - Also Do Backward Moves
        if(board[index].checker == 3){
            //Check Down Left - Normal Forward Move
            if(isValid(downLeft, board.size()) && board[downLeft].isOpen()){
                legalMoves.add(downLeft);
            }

            //Check Down Right - Normal Forward Move
            if(isValid(downRight, board.size()) && board[downRight].isOpen()){
                legalMoves.add(downRight);
            }
            
            //Check Down Left Jump
            if( isValid(downLeft, board.size()) && board[downLeft].isEnemy(board[index].getChecker()) &&
                isValid(downLeftJump, board.size()) && board[downLeftJump].isOpen()){
                
                legalMoves.add(downLeftJump);
                jumpMoves.add(downLeftJump);
            }
            
            //Check Down Right Jump
            if( isValid(downRight, board.size()) && board[downRight].isEnemy(board[index].getChecker()) &&
                isValid(downRightJump, board.size()) && board[downRightJump].isOpen()){
                
                legalMoves.add(downRightJump);
                jumpMoves.add(downRightJump);
            }            
            
        }
    }
    
    //Else Player 2 Turn
    else{ 
        if(board[index].checker == 2 || board[index].checker == 4){

            
            //Check down Left - Normal Forward Move
            if(isValid(downLeft, board.size()) && board[downLeft].isOpen()){
                legalMoves.add(downLeft);
            }

            //Check down Right - Normal Forward Move
            if(isValid(downRight, board.size()) && board[downRight].isOpen()){
                legalMoves.add(downRight);
            }
            
            //Check down Left Jump
            if( isValid(downLeft, board.size()) && board[downLeft].isEnemy(board[index].getChecker()) &&
                isValid(downLeftJump, board.size()) && board[downLeftJump].isOpen()){
                
                legalMoves.add(downLeftJump);
                jumpMoves.add(downLeftJump);
            }
            
            //Check down Right Jump
            if( isValid(downRight, board.size()) && board[downRight].isEnemy(board[index].getChecker()) &&
                isValid(downRightJump, board.size()) && board[downRightJump].isOpen()){
                
                legalMoves.add(downRightJump);
                jumpMoves.add(downRightJump);
            }
            
        }    
        
        //King Checker - Also Do Backward Moves
        if(board[index].checker == 4){
            //Check up Left - Normal Forward Move
            if(isValid(upLeft, board.size()) && board[upLeft].isOpen()){
                legalMoves.add(upLeft);
            }

            //Check up Right - Normal Forward Move
            if(isValid(upRight, board.size()) && board[upRight].isOpen()){
                legalMoves.add(upRight);
            }
            
            //Check up Left Jump
            if( isValid(upLeft, board.size()) && board[upLeft].isEnemy(board[index].getChecker()) &&
                isValid(upLeftJump, board.size()) && board[upLeftJump].isOpen()){
                
                legalMoves.add(upLeftJump);
                jumpMoves.add(upLeftJump);
            }
            
            //Check up Right Jump
            if( isValid(upRight, board.size()) && board[upRight].isEnemy(board[index].getChecker()) &&
                isValid(upRightJump, board.size()) && board[upRightJump].isOpen()){
                
                legalMoves.add(upRightJump);
                jumpMoves.add(upRightJump);
            }            
            
        }
    }
    
    process(legalMoves, jumpMoves)

}































