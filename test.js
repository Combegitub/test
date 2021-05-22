$(document).ready(function() {
    $(document).on('change', ".check_class", function () {
        $(".check_class").prop("checked", false);
        $(this).prop("checked", true);
    });
});