const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
var next = $('.swiper-button-next');
var prev = $('.swiper-button-prev');
var bullets = $('.swiper-pagination');


         // Валидация формы

      //    $('.questions__form__container').validate({
      //     errorClass: "invalid",
      //     rules: {
      //         // simple rule, converted to {required:true}
      //         userName: {
      //           required: true,
      //           minlength: 2,
      //           maxlength: 15
      //         },
      //         userPhone: "required",
      //         // compound rule
      //         userEmail: {
      //           required: true,
      //           email: true
      //         }
      //       },
      //       errorElement:"div",
      //       messages: {
      //         userName: {
      //             required:"Заполните поле",
      //             minlength:"Имя не короче двух символов",
      //             maxlength:"Имя не длиннее 15 символов"
      //         },
      //         userPhone: "Заполните поле",
      //         userEmail: {
      //           required: "Заполните поле",
      //           email: "Введите корректный email, в формате: name@domain.com"
      //         }
      //       },
      //       submitHandler: function(form) {
      //         $.ajax({
      //           type: "POST",
      //           url: "send.php",
      //           data: $(form).serialize(),
      //           success: function (response) {
      //             alert('Форма отправлена, мы свяжемся с вами через 10 минут');
      //             $(form)[0].reset();
      //             modal.removeClass('modal--visible');
      //           },
      //           error: function(response) {
      //             console.error('Ошибка ' + response);
      //           }
      //         });
      //       }
      // });

      $('[type=tel]').mask('+7(000) 000-00-00');
      
    //   $('.free-lessons__form__container').validate({
    //     errorClass: "invalid",
    //     rules: {
    //         // simple rule, converted to {required:true}
    //         userName: {
    //           required: true,
    //           minlength: 2,
    //           maxlength: 15
    //         },
    //         userPhone: "required",
    //         // compound rule
    //         userEmail: {
    //           required: true,
    //           email: true
    //         }
    //       },
    //       errorElement:"div",
    //       messages: {
    //         userName: {
    //             required:"Заполните поле",
    //             minlength:"Имя не короче двух символов",
    //             maxlength:"Имя не длиннее 15 символов"
    //         },
    //         userPhone: "Заполните поле",
    //         userEmail: {
    //           required: "Заполните поле",
    //           email: "Введите корректный email, в формате: name@domain.com"
    //         }
    //       },
    //       submitHandler: function(form) {
    //         $.ajax({
    //           type: "POST",
    //           url: "send.php",
    //           data: $(form).serialize(),
    //           success: function (response) {
    //             alert('Форма отправлена, мы свяжемся с вами через 10 минут');
    //             $(form)[0].reset();
    //             modal.removeClass('modal--visible');
    //           },
    //           error: function(response) {
    //             console.error('Ошибка ' + response);
    //           }
    //         });
    //       }
    // });


     