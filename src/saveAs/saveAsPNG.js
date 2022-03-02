import { saveSvgAsPng } from "save-svg-as-png";

export default function savePNG(name = "pattern.png", scale = 4, encoderOpt = 1) {
    // https://github.com/exupero/saveSvgAsPng
    saveSvgAsPng(document.getElementById("SVG"), name, { scale: scale }, { encoderOptions: encoderOpt }, { encoderType: "image/png" });
}