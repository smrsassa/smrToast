var duration = 3000;

var toast;

function setDuration( config ) {
    duration = typeof config.duration !== 'undefined' ? config.duration : duration;
}

function stylizeToast() {
    Object.assign( toast.style, {
        visibility: "visible",
        minWidth : "250px",
        margin: "0px 20px 0px 20px",
        backgroundColor: "#333",
        color: "#fff",
        textAlign: "center",
        borderRadius: "2px",
        padding: "16px",
        position: "fixed",
        zIndex: "1",
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
        duration: duration,
        easing: 'cubic-bezier(0.1, 1, 1, 0)'
    });
}

function createToast(mensage) {
    let toastElem = document.createElement("div");
    toastElem.id = "smrToast";
    toastElem.innerHTML = mensage;
    toast = toastElem;
}

function myFunction(mensage, config) {
    createToast(mensage);

    if ( typeof config !== 'undefined' ) {
        setDuration(config);
    }

    stylizeToast();

    animateToast();

    document.body.insertBefore(toast, document.body.firstChild);

    setTimeout( function() {
        document.body.removeChild(toast);
    }, duration);
}


