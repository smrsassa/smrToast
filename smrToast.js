const durationDefault = 5000;
const styleDefault = {
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

var toastDuration;
var toastStyle = {};

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
    Object.assign( toast.style, toastStyle );
}

function animateToast() {
    toast.animate([
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: toastDuration,
        easing: 'cubic-bezier(0.1, 1, 1, 0)'
    });
}

function addCofiguracoes( config ) {

    toastDuration = durationDefault;
    Object.assign( toastStyle, styleDefault );

    if ( typeof config.position !== 'undefined' ) setPosition(config.position);

    if ( typeof config.style !== 'undefined' ) setStyle(config.style);
        
    if ( typeof config.duration !== 'undefined' ) setDuration(config.duration);

}

function setStyle( config ) {
    for ( const [index, item] of Object.entries( config ) ) {
        toastStyle[index] = item;
    };
}

function setPosition( config ) {
    let positions = config.split("-");

    delete toastStyle.bottom;

    for ( const [index, item] of Object.entries( positions ) ) {
        toastStyle[item] = "30px"
    };
}

function setDuration( config ) {
    toastDuration = config;
}

function setStatus( status ) {
    toastStatus = status;
}

function smrToast( mensage, config = {} ) {
    if ( toastStatus === "on" ) return false;

    createToast(mensage);

    addCofiguracoes( config );

    stylizeToast();

    animateToast();

    document.body.insertBefore(toast, document.body.firstChild);
    
    setTimeout( function() {
        setStatus("off");

        document.body.removeChild(toast);
    }, toastDuration);

    return true;
}
