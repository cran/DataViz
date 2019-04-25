/**
 * Fetching the mins and maxs of both number columns, parseInt because columns are strings
 */
var minA= d3.min(data, (d) => parseInt(d.col1));
var maxA= d3.max(data, (d) => parseInt(d.col1));
var minB= d3.min(data, (d) => parseInt(d.col2));
var maxB= d3.max(data, (d) => parseInt(d.col2));


var smallest = (minA <= minB) ? minA : minB;
var biggest = (maxA >= maxB) ? maxA : maxB;


x_min = (xMin == xMax) ? smallest : xMin;
x_max = (xMax == xMin) ? biggest : xMax;


var y_min =  d3.min(data, (d) => parseInt(d.col2)-parseInt(d.col1));
var y_max =  d3.max(data, (d) => parseInt(d.col2)-parseInt(d.col1));

offSet = parseInt(offSet);

if (offSet < 0 )
{
  offSet = (offSet <= y_min) ? y_min + 1 : offSet;  
}
if (offSet > 0 )
{
  offSet = (offSet >= y_max) ? y_max - 1 : offSet;  
}
console.log(smallest, biggest);
var MaxVar = d3.max(data, (d) => Math.abs(parseInt(d.col2) - parseInt(d.col1)));


/**
 * Setting the axis in the middle of the window
 */
let x = d3.scaleLinear().domain([x_min, x_max]).range([width/4, 3*width/4]);

/**
 * Seeing how many DIFFERENT items are in the nominal list (if it exists)
 */
var uniqueItems = Array.from(new Set(data.map(d => d.col3)));

/**
 * Function that returns a set of points for one curve
 * a, b, and c are the coefficients for the quadratic function
 * x2, and x1 are the start and end of the curve
 * summit and bottom are respectively the top of the curve and the axis
 * nbPoints is the number of points that the function should draw, note : with
 * a hundred points there is no need for a curveCardinal on the points
 * linear draw would be enough
 */

function createPoints(a, b ,c, x2, x1, summit, bottom, nbPoints) {
 /**
  * Correct coefficients taking account of the window height, and the scaling of the top of the curve
  */
 a = a*((-summit+bottom)/(x1-x2));
 b = b*((bottom-summit)/(x1-x2));
 c = c*(-summit)/(x1-x2) + bottom*(Math.pow((x1+x2),2)/Math.pow((x1-x2),2)) ;


  let points = [[]]; /**< Creating an empty array in 2 dimensions */

  if (x2!=x1){ /**< only if the points are not the same as this condition is checked earlier */
    var localX = x1;
    var localDiff = x2 - x1;
    for (var i = 0; i < nbPoints+1; i++) {
      localX = x1 + i*(localDiff)/nbPoints;
      points[i] =[localX,  a*Math.pow(localX, 2) + b*localX + c];
    }
  if(parseInt(x2)==parseInt(x1)){
  /**/
  }
}
  return points;
}

/**
 * For loop running through all the data 
 */
for (let d of data) {
    let x1 = x(d.col1),
        x2 = x(d.col2);
    var summit, percent, percentBot, bottom;
    if (d.col2 > d.col1) {
        percent = Math.abs((d.col2 - d.col1)) / (MaxVar),
        summit = halfHeight - halfHeight * percent,
        bottom = halfHeight;
        console.log(d.col3, summit);
        console.log("value is above and both positive");
        if (offSet >0 )
        {
            percent = Math.abs((d.col2 - d.col1)) / (y_max),
            percentBot = (offSet / y_max) * ((y_max - Math.abs((d.col2 - d.col1))) / (y_max - offSet)),
            summit = halfHeight - halfHeight * percent + halfHeight * (percentBot),
            bottom = halfHeight;
            console.log(d.col3, summit);
            console.log("value is above and both positive");
        }
    }
      if (d.col2 < d.col1) {
        percent = Math.abs((d.col2 - d.col1)) / (MaxVar),
        summit = halfHeight + halfHeight * percent,
        bottom = halfHeight;
    console.log("Value is under with both positive");
    if(offSet <0)
    {
        percent = Math.abs((d.col2 - d.col1)) / (-y_min),
        percentBot = (offSet / y_min) * ((-y_min - Math.abs((d.col2 - d.col1))) / (-y_min + offSet)),
        summit = halfHeight + halfHeight * percent - halfHeight * (percentBot),
        bottom = halfHeight;
        console.log(d.col3, y_min, "percentBot", percentBot);
        console.log('percent', percent);
        console.log('absolute value', Math.abs((d.col2 - d.col1)));
        console.log('summit', summit);
        console.log("both negative");
    }
  }
  console.log(d.col1, x2, d.col3, summit, percent, percentBot);
  console.log(d.col2 - d.col1,MaxVar);


  /**
   * The mathematical formula for the curve before scaling
   * the equation is quadratic with the form : ax²+bx+c
   * x1 is first point on axis and x2 is arrival point on axis
   */
   var a = (4/(x1-x2));
   var b = ((-4*(x1+x2))/(x1-x2));
   var c = ((4*x1*x2)/(x1-x2));

   d.points = createPoints(a, b, c, x2, x1, summit, bottom, 10);

}
