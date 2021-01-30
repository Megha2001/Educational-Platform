function searchDivs() {
  var flag = 0;
var elementLen = document.getElementById("searchBar").value.length;
var options = document.getElementsByClassName("opt");
document.getElementById('context').style.display='none';
if(elementLen!=0)  {
    for(i=0;i<options.length;i++) {
      var text = options[i].innerHTML;
      for(j=0;j<elementLen;j++) {
        if(document.getElementById("searchBar").value.charAt(j)!=text.charAt(j))
        {
          options[i].style.display="none";
          flag++;
          break;
        }
        else {
          options[i].style.display="inline-block";
        }
      }
    }
    if(flag == options.length) {
      document.getElementById('context').style.display='inline';
    }
  }
  else {
    for(i=0;i<options.length;i++) {
      if(options[i].style.display="none")
      options[i].style.display="inline-block";
    }
  }
}
