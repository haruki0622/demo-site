//要素のフェードイン
$(function () {
  $('.skill-text,.service-item').on('inview',function(){
    $(this).addClass('fadeIn')
  })
})


//画像のスライド
$(function(){
    $('.slider1').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 3000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 5, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      responsive: [
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 2.5, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });

  $(function(){
    $('.slider2').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 3000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 5, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      rtl: true, //逆向きを有効（true）にする
      responsive: [
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 2.5, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });

//ハンバーガーメニュー
$(function () {
  $('.humburger-btn').on('click',function(){
    $('.humburge-menu').toggleClass('show');
  })
})