class Request {
    constructor() {}
    sendEmail() {
        let data = rs.form.get("#frmdemo");
        console.log(data);
        $.ajax({
            url: `/api/v1/`,
            method: "POST",
            data
        })
            .done(d => {
                swal({
                    title: "Done",
                    text: "Your request has been saved. You will be shortly notified",
                    buttons: true,
                    timer: 3000
                }).then(() => {
                    window.location.reload();
                });
            })
            .fail(e => {
                $("#msg").show();
                $("#msg").html(e.responseJSON.message);
            });
    }
}
