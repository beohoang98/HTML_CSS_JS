function makeASafe() {
    $('a').attr('target','_blank')
        .attr('rel','noreferer noopener');
}
