
$('#navbar a').on('click', function(event){
if(this.has !== ''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
        {
            scrollTop: $(hash).offset().top-70
        },
        800
    );
}
});

$('#show-case a').on('click', function(event){
if(this.has !== ''){
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
        {
            scrollTop: $(hash).offset().top-70
        },
        800
    );
}
});