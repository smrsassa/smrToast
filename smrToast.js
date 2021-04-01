var duration = 3000;

var style = {
    visibility: "visible",
    minWidth : "250px",
    margin: "0px 20px 0px 20px",
    background: "#000000",
    color: "#ffffff",
    textAlign: "center",
    borderRadius: "2px",
    padding: "16px",
    position: "fixed",
    zIndex: "1",
    bottom: "30px",
    fontSize: "17px",
    cursor: "pointer"
};

var toastStatus = "off";

var toast;

function createToast( mensage ) {
    setStatus("on");

    let toastElem = document.createElement("div");
    toastElem.className = "smrToast";
    toastElem.innerHTML = mensage;
    toast = toastElem;
}

function stylizeToast() {
    Object.assign( toast.style, style );
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

function addCofiguracoes( config ) {

    if ( typeof config.style !== 'undefined' ) setStyle(config.style);
        
    if ( typeof config.duration !== 'undefined' ) setDuration(config.duration);

}

function setStyle( config ) {
    for ( const [index, item] of Object.entries( config ) ) {
        style[index] = item;
    };
}

function setDuration( config ) {
    duration = config;
}

function setStatus( status ) {
    toastStatus = status;
}

function smrToast( mensage, config ) {
    if ( toastStatus === "on" ) return false;

    createToast(mensage);

    if ( typeof config !== 'undefined' ) addCofiguracoes( config );

    stylizeToast();

    animateToast();

    document.body.insertBefore(toast, document.body.firstChild);

    setTimeout( function() {
        setStatus("off");

        document.body.removeChild(toast);
    }, duration);

    return true;
}
