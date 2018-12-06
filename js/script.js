jQuery(document).ready(function(){
    $('#convertercalc1').on('submit', function(evt){
        alert('Form Submission Intercepted!');
        evt.preventDefault();
        var $inches = $('#inches');
        var inches = $inches.val();
        var inchestocentimeterconversion = $("#inches-centimeters").val();
        axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
            inchestocentimeter = result.data[inchestocentimeterconversion];
            var total = (inches) * (inchestocentimeter);
            $("#total").html(total);
        });
    });
    $('#convertercalc2').on('submit', function(evt){
        alert('Form Submission Intercepted!');
        evt.preventDefault();
        var $centimeters = $('#centimeters');
        var centimeters = $centimeters.val();
        var centimeterstoinchesconversion = $("#centimeters-inches").val();
        axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
            centimeterstoinches = result.data[centimeterstoinchesconversion];
            var total = (centimeters) * (centimeterstoinches);
            $("#total1").html(total);
        });
    });
}); 