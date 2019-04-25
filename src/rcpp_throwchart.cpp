#define STRICT_R_HEADERS
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <Rcpp.h>
using namespace Rcpp;

// [[Rcpp::export]]
void rcpp_throwchart(List before,List after,List col,List id,List lwd,  List xlim, int offSet, String path){
  NumericVector before_local = as<NumericVector>(before[0]);
  NumericVector after_local = as<NumericVector>(after[0]);
  StringVector col_local = as<StringVector>(col[0]);
  StringVector id_local = as<StringVector>(id[0]);
  NumericVector lwd_local = as<NumericVector>(lwd[0]);
  NumericVector xlim_local = as<NumericVector>(xlim[0]);
  int offset_local = offSet;

  String path_local(path);
  std::ofstream myfile;

  Rcout << path_local.get_cstring() << std::endl;  
  path_local += "/extdata/data.js";
  
  myfile.open(path_local.get_cstring());
  myfile << "names1 = \"" << 1 << "\";" << std::endl;
  myfile << "names2 = \"" << 2 << "\";" << std::endl;
  myfile << "xMin = \"" << xlim_local[0] << "\";" << std::endl;
  myfile << "xMax = \"" << xlim_local[1] << "\";" << std::endl; 
  myfile << "offSet = \"" << offset_local << "\";" << std::endl;
  myfile << "data=[{}" << std::endl;
  for (int i=0; i < before_local.size(); i++)
  {
    myfile << ",{\"col1\": " << before_local[i] << "," << std::endl << "\"col2\": " << after_local[i] << "," << std::endl << "\"col3\": \"" << id_local[i] << "\"," << std::endl << "\"col4\": \"" << col_local[i] << "\"," << std::endl << "\"col5\": \"" << lwd_local[i] <<"\"}" ;
  }
  myfile << "];";
  myfile.close();
  
  path_local += "/../index.html";
  system(path_local.get_cstring());
}






