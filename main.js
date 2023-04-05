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

function handleAddToQuilt() {
  storageCanvas.getActiveObject().clone(function (cloned) {
    quiltCanvas.add(cloned);
  });
}

function handleRemoveFromQuilt() {
  object = quiltCanvas.getActiveObject();
  quiltCanvas.remove(object);
}

const redButton = document.getElementById("redButton");
redButton.addEventListener("click", function () {
  console.log(storageCanvas.getActiveObject());
  object = storageCanvas.getActiveObject();
  object.set("fill", "red");
  storageCanvas.add(object);
});

function handleRed() {
  object = storageCanvas.getActiveObject();
  object.set("fill", "red");
  storageCanvas.add(object);
}

function handleBlue() {
  object = storageCanvas.getActiveObject();
  object.set("fill", "blue");
  storageCanvas.add(object);
}

function handleYellow() {
  object = storageCanvas.getActiveObject();
  object.set("fill", "yellow");
  storageCanvas.add(object);
}
