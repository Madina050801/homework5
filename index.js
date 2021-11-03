//1101 - true, true, false, true
let a= '1101';
let arr = [];
let a1= false;
for(i=0; i<a.length; i++){
    if(a[i]==1){
        a1= true;
    } else{
        a1=false;
    }
    arr.push(a1);
}
console.log(arr.join(', '));


//'This is a title' => 'This Is A Title'
var title='This is a title';
for(i=0; i<title.length; i++){
    if(title[i]==' ' && title[i+1] == title[i+1].toLowerCase()){
        title=title.replace(title[i+1], title[i+1].toUpperCase());
    }
}
console.log(title);