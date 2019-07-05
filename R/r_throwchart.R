quad <- function(point,before_point,after_point,offSet){
  polyAux <- function(point){return((point - before_point)*(point - after_point))}
  result <- (point - before_point)*(point - after_point) / polyAux((before_point+after_point)/2) * (after_point-before_point-offSet)
  return(result)
}
r_throwchart <- function(before, after, xlim, ylim, col, lwd, offSet){
  if((xlim[1] == xlim[2]))
  {
    max_before = max(before)
    max_after = max(after)
    min_before = min(before)
    min_after = min(after)
    if(min_before <= min_after)
    {
      definite_min = min_before
    }
    else
    {
      definite_min = min_after
    }
    if(max_before >= max_after)
    {
      definite_max = max_before
    }
    else
    {
      definite_max = max_after
    }
    xlim <- c(definite_min, definite_max)
  }
  if(ylim[1] == ylim [2])
  {
    max_difference = max(abs(after-before))
    ylim <- c(-max_difference, max_difference)
  }
  if(offSet > 0)
  {
    ylim <- c(offSet, max_difference)
  }
  if(offSet < 0)
  {
    ylim <- c(-max_difference, offSet)
  }
  plot(x=xlim,y=c(offSet,offSet),xlim=xlim,ylim=ylim,type="l", ann = FALSE)
  for(i in 1:NROW(before)){
    points <- seq(before[[1]][i],after[[1]][i],length.out = 100)
    lines(points,quad(points,before[[1]][[i]],after[[1]][[i]],offSet)+offSet,xlim=before[[1]][[i]],after[[1]][[i]],type="l",col="blue",lwd=2.5)  
  }
}
