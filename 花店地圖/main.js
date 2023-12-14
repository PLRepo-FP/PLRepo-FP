//window.onload = function() {
  //alert("點擊地圖上的圖例來或的更多資訊");};

function initMap() {
    // 使用 Google Maps JavaScript API 初始化地圖
    var flower1 = { lat: 25.014306, lng: 121.533825 };
    var flower2 = { lat: 25.0136509, lng: 121.5349726 };
    var flower3 = { lat: 25.0060066, lng: 121.5387918 };
    var flower4 = { lat: 24.9987934, lng: 121.5400098 };
    var flower5 = { lat: 24.9937217, lng: 121.5397178 };
    var flower6 = { lat: 24.9905764, lng: 121.541658 };
    var flower7 = { lat: 25.0133432, lng: 121.5169963 };
    var flower8 = { lat: 25.0082296, lng: 121.5170928 };
    var flower9 = { lat: 24.9998645, lng: 121.5249892 };
    var flower10 = { lat: 24.9984117, lng: 121.5081995 };
    var tennis11 = { lat: 25.05472, lng: 121.50666 };
    var tennis12 = { lat: 25.03388, lng: 121.48833 };
    var basketball1 = {lat: 25.0070476, lng: 121.5282095};
    var basketball2 = {lat: 25.0144935, lng: 121.5256417};
    var basketball3 = {lat: 25.0191973, lng: 121.5359528};
    var basketball4 = {lat: 25.0093304, lng: 121.5366525};
    var badminton1 = {lat: 25.0067071, lng: 121.5292285};
    var badminton2 = {lat: 25.0211835, lng: 121.5048036};
    var badminton3 = {lat: 25.0202073, lng: 121.5215287};
    var NTNU = {lat: 25.0260878, lng: 121.5275484};
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 24.99972, lng: 121.53472 },
      zoom: 13, // 初始縮放級別
      styles: [
        {
          featureType: 'poi',
          stylers: [{ visibility: 'off' }] // 隱藏點興趣 (POI) 標籤
        }
      ]
    });

    // 1 在地圖上加上標記（可選）
    var marker = new google.maps.Marker({
      position: flower1,
      map: map,
      title: '奇奕花坊 Chiyi Flower 台大公館花店',
      icon: {
        url :"5275881.png",
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow = new google.maps.InfoWindow({
      content: '奇奕花坊 Chiyi Flower 台大公館花店<br><a href="https://www.google.com/maps/place/%E5%A5%87%E5%A5%95%E8%8A%B1%E5%9D%8A+Chiyi+Flower+%E5%8F%B0%E5%A4%A7%E5%85%AC%E9%A4%A8%E8%8A%B1%E5%BA%97/@25.014306,121.5312501,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a98b1cadcf1b:0x8ec61a78896fa6a6!8m2!3d25.014306!4d121.533825!16s%2Fg%2F11c48w8fd2?entry=ttu">詳細資訊</a>'
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    //2
    var marker2 = new google.maps.Marker({
    position: flower2,
    map: map,
    title: '公館水源鮮花店',
    icon: {
      url: "5275881.png",
      scaledSize: new google.maps.Size(30, 30)
          }
    });

    var infowindow2 = new google.maps.InfoWindow({
    content: '公館水源鮮花店<br><a href="https://www.google.com/maps/place/%E5%85%AC%E9%A4%A8%E6%B0%B4%E6%BA%90%E9%AE%AE%E8%8A%B1%E5%BA%97/@25.0136509,121.5323977,17z/data=!3m1!5s0x3442a98ae83d0733:0xa705fe67d969e75!4m14!1m7!3m6!1s0x3442a98ae8c3d0c3:0x296442e9f7822cf9!2z5YWs6aSo5rC05rqQ6a6u6Iqx5bqX!8m2!3d25.0136509!4d121.5349726!16s%2Fg%2F11cs2gqf26!3m5!1s0x3442a98ae8c3d0c3:0x296442e9f7822cf9!8m2!3d25.0136509!4d121.5349726!16s%2Fg%2F11cs2gqf26?entry=ttu">詳細資訊</a>'
    });

    marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
    });

    //3
    var marker3 = new google.maps.Marker({
      position: flower3,
      map: map,
      title: '情意濃花藝禮坊',
      icon: {
        url :"5275881.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow3 = new google.maps.InfoWindow({
      content: '情意濃花藝禮坊<br><a href="https://www.google.com/maps/place/%E6%83%85%E6%84%8F%E6%BF%83%E8%8A%B1%E8%97%9D%E7%A6%AE%E5%9D%8A/@25.0060066,121.5362169,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a98dd7d00e31:0xbb6b430ea83ef62!8m2!3d25.0060066!4d121.5387918!16s%2Fg%2F12qfwlgbc?entry=ttu">詳細資訊</a>'
    });

    marker3.addListener('click', function() {
      infowindow3.open(map, marker3);
    });
    //4
    var marker4 = new google.maps.Marker({
      position: flower4,
      map: map,
      title: '維美花藝 WM FLOWER SHOP',
      icon: {
        url :"5275881.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow4 = new google.maps.InfoWindow({
      content: '維美花藝 WM FLOWER SHOP<br><a href="https://www.google.com/maps/place/%E7%B6%AD%E7%BE%8E%E8%8A%B1%E8%97%9D+WM+FLOWER+SHOP/@24.9987934,121.5374349,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab384eafa80d:0x45c3bf057f44a02d!8m2!3d24.9987934!4d121.5400098!16s%2Fg%2F11qn12rqj6?entry=ttu">詳細資訊</a>'
    });

    marker4.addListener('click', function() {
      infowindow4.open(map, marker4);
    });
    //5
    var marker5 = new google.maps.Marker({
      position: flower5,
      map: map,
      title: '華苓創意花禮',
      icon: {
        url :"5275881.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow5 = new google.maps.InfoWindow({
      content: '華苓創意花禮<br><a href="https://www.google.com/maps/place/%E8%8F%AF%E8%8B%93%E5%89%B5%E6%84%8F%E8%8A%B1%E7%A6%AE/@24.9937217,121.5371429,17z/data=!3m1!4b1!4m6!3m5!1s0x346801f0a0cd472b:0x8be5d78cf1bdd15f!8m2!3d24.9937217!4d121.5397178!16s%2Fg%2F11c49d8pr0?entry=ttu">詳細資訊</a>'
    });

    marker5.addListener('click', function() {
      infowindow5.open(map, marker5);
    });
    //6
    var marker6 = new google.maps.Marker({
      position: flower6,
      map: map,
      title: '景美夜市花店',
      icon: {
        url :"5275881.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow6 = new google.maps.InfoWindow({
      content: '景美夜市花店<br><a href="https://www.google.com/maps/place/%E6%99%AF%E7%BE%8E%E5%A4%9C%E5%B8%82%E8%8A%B1%E5%BA%97/@24.9905764,121.5390831,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab5f75e7f5c1:0x8cf9c9c1b665ee4f!8m2!3d24.9905764!4d121.541658!16s%2Fg%2F11kj08zxfy?entry=ttu">詳細資訊</a>'
    });

    marker6.addListener('click', function() {
      infowindow6.open(map, marker6);
    });
    //7
    var marker7 = new google.maps.Marker({
      position: flower7,
      map: map,
      title: '永和花中花花店',
      icon: {
        url :"5275881.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow7 = new google.maps.InfoWindow({
      content: '永和花中花花店<br><a href="https://www.google.com/maps/place/%E6%99%AF%E7%BE%8E%E5%A4%9C%E5%B8%82%E8%8A%B1%E5%BA%97/@24.9905764,121.5390831,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab5f75e7f5c1:0x8cf9c9c1b665ee4f!8m2!3d24.9905764!4d121.541658!16s%2Fg%2F11kj08zxfy?entry=ttu">詳細資訊</a>'
    });

    marker7.addListener('click', function() {
      infowindow7.open(map, marker7);
    });
    //8
    var marker8 = new google.maps.Marker({
      position: flower8,
      map: map,
      title: '果石花房',
      icon: {
        url :"5275881.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow8 = new google.maps.InfoWindow({
      content: '果石花房<br><a href="https://www.google.com/maps/place/%E6%9E%9C%E7%9F%B3%E8%8A%B1%E6%88%BF/@25.0082296,121.5145179,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a9e8ff421937:0xc93fc66e560be395!8m2!3d25.0082296!4d121.5170928!16s%2Fg%2F12ll7hzk1?entry=ttu">詳細資訊</a>'
    });

    marker8.addListener('click', function() {
      infowindow8.open(map, marker8);
    });
    //9

    var marker9 = new google.maps.Marker({
      position: flower9,
      map: map,
      title: '芊芊花店cianflower',
      icon: {
        url :"5275881.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow9 = new google.maps.InfoWindow({
      content: '芊芊花店cianflower<br><a href="https://www.google.com/maps/place/%E8%8A%8A%E8%8A%8A%E8%8A%B1%E5%BA%97cianflower/@24.9998645,121.5224143,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a9e4b8f5d10b:0x19ab001b7cce5be2!8m2!3d24.9998645!4d121.5249892!16s%2Fg%2F1hhjzc_m7?entry=ttu">詳細資訊</a>'
    });

    marker9.addListener('click', function() {
      infowindow9.open(map, marker9);
    });

    //10
    var marker10 = new google.maps.Marker({
      position: flower10,
      map: map,
      title: '詩榆花坊',
      icon: {
        url :"5275881.png",  
        scaledSize: new google.maps.Size(30, 30)
      }
    });

    var infowindow10 = new google.maps.InfoWindow({
      content: '詩榆花坊<br><a href="https://www.google.com/maps/place/%E8%A9%A9%E6%A6%86%E8%8A%B1%E5%9D%8A/@24.9984117,121.5056246,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a9d8b590c55f:0x75f16ab490e3169!8m2!3d24.9984117!4d121.5081995!16s%2Fg%2F12m95dq11?entry=ttu">詳細資訊</a>'
    });

    marker10.addListener('click', function() {
      infowindow10.open(map, marker10);
    });
        
  }