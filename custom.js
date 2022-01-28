$('#kirim').click(function() {
    var email = $('#email').val();

    $('#respon').text('Terima kasih sudah menghubungi kami. Permintaan Anda telah terkirim.')
    $('#getemail').text('Your Request : ' + email);
});