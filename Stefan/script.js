function discover() {
    document.querySelector('.textbox h1').style.marginLeft = '-1500px';
    setTimeout(() => {
        document.querySelector('.textbox p').style.marginLeft = '-1500px';
    }, 50);
    setTimeout(() => {
        document.querySelector('.textbox button').style.marginLeft = '-1500px';
    }, 100);
    setTimeout(() => {
        window.location.replace('cookie.html');
    }, 350);
}