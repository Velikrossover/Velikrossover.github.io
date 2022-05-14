var navbar_border_color_index = 0
var navbar_border_colors = ["royalblue","orange","#d32064","yellowgreen"]

// navbar border color animation
function animated_navbar_border(){
    console.log("ok!")
    let element = document.getElementById("navbar");

    // set css style
    element.style.borderBottomColor = navbar_border_colors[navbar_border_color_index];
    element.style.transition = "0.5s";

    navbar_border_color_index = navbar_border_color_index + 1
    if (navbar_border_color_index==3){
        navbar_border_color_index = 0
    }
    setTimeout(animated_navbar_border,1000)
}

// copy email to the clipboard
function copy_email(){
    navigator.clipboard.writeText("Velikrossover.Studios.Contacto@gmail.com")
}

function copy_number(){
    navigator.clipboard.writeText("997-977-24-76")
}

function show_label_email_copied (){
    let element = document.getElementById("label_email");
    element.style.display = "block";
    element.style.transition  = "0.5s"
}

function show_label_number_copied (){
    let element = document.getElementById("label_number");
    element.style.display = "block";
    element.style.transition  = "0.5s"
}
window.addEventListener("load",animated_navbar_border)