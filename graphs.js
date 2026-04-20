(function () {
  // Normalized curve points: [rpm_fraction 0..1, value_fraction 0..1]
  // Solid line = HP, Dashed line = Nm | Dark = stock, Red = tuned

  var engines = [
    // BMW X5 30D — biturbo diesel: wide torque slab, power peaks ~4000rpm
    {
      stockHp: [[0,.02],[.10,.08],[.20,.22],[.32,.44],[.44,.68],[.56,.88],[.64,.97],[.72,1.0],[.82,.97],[.92,.88],[1,.72]],
      tunedHp: [[0,.02],[.10,.10],[.20,.28],[.32,.54],[.44,.82],[.56,.98],[.64,1.0],[.74,.99],[.84,.96],[.94,.90],[1,.78]],
      stockNm: [[0,.08],[.10,.40],[.18,.78],[.26,.97],[.32,1.0],[.46,1.0],[.58,.99],[.68,.94],[.78,.82],[.90,.66],[1,.50]],
      tunedNm: [[0,.10],[.10,.48],[.18,.88],[.26,1.0],[.32,1.0],[.48,1.0],[.60,.99],[.70,.97],[.80,.86],[.92,.70],[1,.54]]
    },
    // VW Tiguan 2.0 TSI — turbo petrol: torque plateau 1500–4500rpm, power peaks ~5800rpm
    {
      stockHp: [[0,.01],[.08,.06],[.16,.18],[.26,.38],[.38,.58],[.50,.74],[.62,.88],[.72,.96],[.80,1.0],[.90,.98],[.96,.94],[1,.86]],
      tunedHp: [[0,.01],[.08,.08],[.16,.24],[.26,.50],[.38,.73],[.50,.89],[.62,.97],[.72,1.0],[.82,.99],[.92,.97],[1,.90]],
      stockNm: [[0,.04],[.10,.28],[.17,.72],[.23,.96],[.28,1.0],[.42,1.0],[.56,1.0],[.66,.96],[.76,.82],[.88,.58],[.96,.36],[1,.24]],
      tunedNm: [[0,.05],[.10,.34],[.17,.82],[.23,1.0],[.28,1.0],[.44,1.0],[.58,1.0],[.68,.98],[.78,.86],[.90,.64],[.97,.40],[1,.26]]
    },
    // Toyota Land Cruiser 2.8D — diesel: torque peaks early ~2000rpm, power ~3700rpm
    {
      stockHp: [[0,.02],[.10,.08],[.20,.24],[.32,.50],[.44,.76],[.56,.94],[.65,1.0],[.76,.97],[.88,.88],[1,.72]],
      tunedHp: [[0,.02],[.10,.10],[.20,.30],[.32,.62],[.44,.88],[.56,.99],[.66,1.0],[.78,.97],[.90,.90],[1,.74]],
      stockNm: [[0,.06],[.12,.42],[.20,.80],[.28,.98],[.34,1.0],[.46,1.0],[.56,.97],[.66,.90],[.78,.76],[.90,.60],[1,.44]],
      tunedNm: [[0,.08],[.12,.50],[.20,.90],[.28,1.0],[.35,1.0],[.48,1.0],[.58,.98],[.68,.92],[.80,.80],[.92,.64],[1,.48]]
    }
  ];

  var W = 300, H = 110, pX = 6, pY = 8;

  function pts(curve) {
    return curve.map(function (p) {
      var sx = pX + p[0] * (W - 2 * pX);
      var sy = (H - pY) - p[1] * (H - 2 * pY);
      return sx.toFixed(1) + ',' + sy.toFixed(1);
    }).join(' ');
  }

  function makeSVG(d, idx) {
    var pid = 'adact-grid-' + idx;
    return '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg"'
      + ' style="width:100%;height:auto;display:block" aria-hidden="true">'
      + '<defs>'
      + '<pattern id="' + pid + '" width="22" height="22" patternUnits="userSpaceOnUse">'
      + '<path d="M22 0L0 0 0 22" fill="none" stroke="rgba(18,18,22,0.07)" stroke-width="1"/>'
      + '</pattern>'
      + '</defs>'
      + '<rect width="' + W + '" height="' + H + '" fill="url(#' + pid + ')"/>'
      // stock Nm — dark dashed
      + '<polyline points="' + pts(d.stockNm) + '" fill="none" stroke="#121216" stroke-width="1.5" stroke-opacity="0.40" stroke-dasharray="5 3"/>'
      // stock HP — dark solid
      + '<polyline points="' + pts(d.stockHp) + '" fill="none" stroke="#121216" stroke-width="1.5" stroke-opacity="0.55"/>'
      // tuned Nm — red dashed
      + '<polyline points="' + pts(d.tunedNm) + '" fill="none" stroke="#e62314" stroke-width="2" stroke-opacity="0.65" stroke-dasharray="5 3"/>'
      // tuned HP — red solid
      + '<polyline points="' + pts(d.tunedHp) + '" fill="none" stroke="#e62314" stroke-width="2" stroke-opacity="0.90"/>'
      + '</svg>';
  }

  function init() {
    var containers = document.querySelectorAll('.review-mini-graph');
    containers.forEach(function (el, i) {
      if (engines[i]) el.innerHTML = makeSVG(engines[i], i);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 0); });
  } else {
    setTimeout(init, 0);
  }
})();
