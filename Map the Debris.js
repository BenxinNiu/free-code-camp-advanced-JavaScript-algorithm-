function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  function convert(avgAlt){
    return Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+avgAlt,3)/GM)); }
  function orbitalPeriods(val){
    val.orbitalPeriod=convert(val.avgAlt);
    delete val.avgAlt;
    return val;}
  return arr.map(orbitalPeriods);
}
