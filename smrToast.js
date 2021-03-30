var toast;

function createToast(mensage) {
    let toastElem = document.createElement("div");
    toastElem.id = "smrToast";
    toastElem.innerHTML = mensage;
    toast = toastElem;
}

function stylizeToast() {
    Object.assign( toast.style, {
        visibility: "visible",
        minWidth : "250px",
        marginLeft: "-125px",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        borderRadius: "2px",
        padding: "16px",
        position: "fixed",
        zIndex: "1",
        left: "50%",
        bottom: "30px",
        fontSize: "17px",
        cursor: "pointer"
    });
}

function animateToast() {
      toast.animate([
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0 }
      ], {
        duration: 2900
      });
}

function myFunction(mensage) {
    createToast(mensage);

    stylizeToast();

    animateToast();

    document.body.insertBefore(toast, document.body.firstChild);

    setTimeout( function() {
        document.body.removeChild(toast);
    }, 2899);
}


