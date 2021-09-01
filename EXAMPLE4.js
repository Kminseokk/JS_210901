
var highQualityWool = 1; // 고급 양모
var rowQualityWool = 2; // 저급 양모

var selectedQuality = highQuali2tyWool; // 현재 선택한 양모
var quantity = 30; // 선택한 양모의 개수

var UserSelect;

if ( selectedQuality == highQualityWool){
    selectedQuality = 50000;
    UserSelect = "고급 양모";
}
else {
    selectedQuality = 10000;
    UserSelect = "저급 양모";
}

var price = selectedQuality * quantity;

console.log(UserSelect+"를 "+quantity+"개 선택하셨습니다. 가격은 "+price+"원 입니다.");
