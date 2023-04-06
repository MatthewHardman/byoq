import { fabric } from "fabric";

var storageCanvas = new fabric.Canvas("storage");
var quiltCanvas = new fabric.Canvas("quilt");

var rect = new fabric.Rect({
  left: 50,
  top: 25,
  fill: "blue",
  width: 30,
  height: 30,
  hasControls: false,
  lockMovementX: true,
  lockMovementY: true,
});

var triangle = new fabric.Triangle({
  width: 30,
  height: 30,
  fill: "blue",
  left: 150,
  top: 25,
  hasControls: false,
  lockMovementX: true,
  lockMovementY: true,
});

var semiCircle = new fabric.Circle({
  radius: 15,
  fill: "blue",
  left: 250,
  top: 25,
  endAngle: 180,
  hasControls: false,
  lockMovementX: true,
  lockMovementY: true,
});

storageCanvas.add(rect, triangle, semiCircle);

const addToQuilt = document.getElementById("addToQuilt");
addToQuilt.addEventListener("click", function () {
  storageCanvas.getActiveObject().clone(function (cloned) {
    quiltCanvas.add(cloned);
  });
});

const removeFromQuilt = document.getElementById("removeFromQuilt");
removeFromQuilt.addEventListener("click", function () {
  let object = quiltCanvas.getActiveObject();
  quiltCanvas.remove(object);
});

const redButton = document.getElementById("redButton");
redButton.addEventListener("click", function () {
  let object = storageCanvas.getActiveObject();
  object.set("fill", "red");
  storageCanvas.add(object);
});

const blueButton = document.getElementById("blueButton");
blueButton.addEventListener("click", function () {
  let object = storageCanvas.getActiveObject();
  object.set("fill", "blue");
  storageCanvas.add(object);
});

const yellowButton = document.getElementById("yellowButton");
yellowButton.addEventListener("click", function () {
  let object = storageCanvas.getActiveObject();
  object.set("fill", "yellow");
  storageCanvas.add(object);
});
