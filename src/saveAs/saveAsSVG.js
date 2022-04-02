export default function save(svg, name = 'pattern.svg') {
    var svg = document.getElementById("SVG");
    var svgToString;
    if (svg.outerHTML)
        svgToString = svg.outerHTML;

    console.log(svgToString);
    var svgData = svgToString;
    var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);

    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

}