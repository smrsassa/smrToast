var toast;

function createToast(mensage) {
    let toastElem = document.createElement("div");
    toastElem.id = "snackbar";
    toastElem.innerHTML = mensage;
    toast = toastElem;
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

function myFunction(mensage) {
    createToast(mensage);

    document.body.insertBefore(toast, document.body.firstChild);

    setTimeout( function() {
        document.body.removeChild(toast);
    }, 2900);
}


