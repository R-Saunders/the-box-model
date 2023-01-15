function displayIndividualPaddingInput() {
  var individualPaddingInput = document.getElementById("individualPaddingInput");
  if (document.getElementById("adjustPadding").checked) {
      individualPaddingInput.style.display = "flex";
  } else {
      individualPaddingInput.style.display = "none";
  }
}

function displayIndividualMarginInput() {
  var individualMarginInput = document.getElementById("individualMarginInput");
  if (document.getElementById("adjustMargin").checked) {
      individualMarginInput.style.display = "flex";
  } else {
      individualMarginInput.style.display = "none";
  }
}

function adjustImage() {
  var img = document.getElementById("myImage");
  img.style.height = document.getElementById("height").value + "px";
  img.style.width = document.getElementById("width").value + "px";
  img.style.borderWidth = document.getElementById("borderWidth").value + "px";
  img.style.borderStyle = document.getElementById("borderStyle").value;
  if(document.getElementById("adjustPadding").checked){
    img.style.paddingTop = document.getElementById("paddingTop").value + "px";
    img.style.paddingRight = document.getElementById("paddingRight").value + "px";
    img.style.paddingBottom = document.getElementById("paddingBottom").value + "px";
    img.style.paddingLeft = document.getElementById("paddingLeft").value + "px";
  }else {
    img.style.padding = document.getElementById("padding").value + "px";
  }
  if(document.getElementById("adjustMargin").checked){
    img.style.marginTop = document.getElementById("marginTop").value + "px";
    img.style.marginRight = document.getElementById("marginRight").value + "px";
    img.style.marginBottom = document.getElementById("marginBottom").value + "px";
    img.style.marginLeft = document.getElementById("marginLeft").value + "px";
  }else {
    img.style.margin = document.getElementById("margin").value + "px";
  }
}
