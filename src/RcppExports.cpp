// Generated by using Rcpp::compileAttributes() -> do not edit by hand
// Generator token: 10BE3573-1514-4C36-9D1C-5A225CD40393

#include <Rcpp.h>

using namespace Rcpp;

// rcpp_throwchart
void rcpp_throwchart(List before, List after, List col, List id, List lwd, List xlim, List ylim, int offSet, String path);
RcppExport SEXP _DataViz_rcpp_throwchart(SEXP beforeSEXP, SEXP afterSEXP, SEXP colSEXP, SEXP idSEXP, SEXP lwdSEXP, SEXP xlimSEXP, SEXP ylimSEXP, SEXP offSetSEXP, SEXP pathSEXP) {
BEGIN_RCPP
    Rcpp::RNGScope rcpp_rngScope_gen;
    Rcpp::traits::input_parameter< List >::type before(beforeSEXP);
    Rcpp::traits::input_parameter< List >::type after(afterSEXP);
    Rcpp::traits::input_parameter< List >::type col(colSEXP);
    Rcpp::traits::input_parameter< List >::type id(idSEXP);
    Rcpp::traits::input_parameter< List >::type lwd(lwdSEXP);
    Rcpp::traits::input_parameter< List >::type xlim(xlimSEXP);
    Rcpp::traits::input_parameter< List >::type ylim(ylimSEXP);
    Rcpp::traits::input_parameter< int >::type offSet(offSetSEXP);
    Rcpp::traits::input_parameter< String >::type path(pathSEXP);
    rcpp_throwchart(before, after, col, id, lwd, xlim, ylim, offSet, path);
    return R_NilValue;
END_RCPP
}

static const R_CallMethodDef CallEntries[] = {
    {"_DataViz_rcpp_throwchart", (DL_FUNC) &_DataViz_rcpp_throwchart, 9},
    {NULL, NULL, 0}
};

RcppExport void R_init_DataViz(DllInfo *dll) {
    R_registerRoutines(dll, NULL, CallEntries, NULL, NULL);
    R_useDynamicSymbols(dll, FALSE);
}
