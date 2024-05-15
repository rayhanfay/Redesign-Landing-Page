
//Counting Animation

  $(document).ready(function() {
    animateNumber('.guru-besar', 107);
    animateNumber('.fakultas', 10);
    animateNumber('.dosen', 1169);
    animateNumber('.mahasiswa', 35350);
    animateNumber('.program-studi', 109);
    animateNumber('.tenaga-pendidik', 902);

    function animateNumber(selector, finalValue) {
        $(selector).each(function() {
            var $this = $(this);
            $({ countNum: $this.text() }).animate({ countNum: finalValue }, {
                duration: 2000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }
});