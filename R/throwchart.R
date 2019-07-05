throwchart <- function(before, after, col = "#123", id = "", lwd = 2.5, xlim = c(0,0), ylim = c(0,0), offSet = 0, webinteract = TRUE){
  lengthbefore <- NROW(before)
  if(!is_tibble(before)) {
    before <- tibble(before)
    }
  if(!is_tibble(after)) {
    after <- tibble(after)
  }
  if(!is_tibble(col) & col[1] != "#123") {
    col <- tibble(col)
    }
  if(!is_tibble(id) & id[1] != "") {
    id <- tibble(id)
    }
  if(!is_tibble(lwd) & lwd[1] != 2.5) {
    lwd <- tibble(lwd)
    }
  if(lengthbefore!=NROW(after)){
    stop("Number of before rows must be equal to number of after rows")}
  if(NROW(col) == 1){
    col <- tibble(rep(col,lengthbefore))
    }
  if(NROW(lwd) == 1){
    lwd <- tibble(rep(lwd,lengthbefore))
    }
  if(NROW(id) == 1){
    id <- tibble(rep(id,lengthbefore))
  }
  if(webinteract)
  {
    if(!is_tibble(xlim)) {
      xlim <- tibble(xlim)
    }
    if(!is_tibble(ylim)) {
      ylim <- tibble(ylim)
    }
    rcpp_throwchart(before = before, after = after, col = col, id = id, lwd = lwd, xlim = xlim, ylim = ylim, offSet = offSet, path.package("DataViz"))
  }
  else
  {
    r_throwchart(before = before, after = after, col = "blue", lwd = lwd, xlim = c(0,0), ylim = c(0,0), offSet = offSet)
  }
  return(invisible())
}
