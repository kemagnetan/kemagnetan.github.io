$('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
  });
    $('.migrasi').click(function(){
      $('nav ul .migrasi-tampil').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
    });
    $('.kemagnetan').click(function(){
      $('nav ul .kemagnetan-tampil').toggleClass("show1");
      $('nav ul .second').toggleClass("rotate");
    });
    $('.produk').click(function(){
      $('nav ul .produk-tampil').toggleClass("show2");
      $('nav ul .tiga').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
      $(this).addClass("beranda").siblings().removeClass("beranda");
    });