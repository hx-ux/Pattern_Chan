export default function ret() {
    var svg = document.getElementById("SVG");
    var svgToString;
    if (svg.outerHTML) {
        svgToString = svg.outerHTML;
    }
    else {
        svgToString = "ERROR";
    }

    return svgToString;
}
