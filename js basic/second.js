var arr = ["https://images.pexels.com/photos/1207875/pexels-photo-1207875.jpeg", "https://images.pexels.com/photos/34231/antler-antler-carrier-fallow-deer-hirsch.jpg", "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg"]
var i = 0;
function change(){
    document.getElementsByTagName("img")[0].src = arr[i];

    if(i>=0 && i<=2){
        i++;
    }else{
        i=0;
    }
    
}