function searchDivs1() {
var flag = 0;
var elementLen = document.getElementById("searchBar1").value.length;
var options = document.getElementsByClassName("coursename");
document.getElementById('contextText').style.display='none';
if(elementLen!=0)  {

  document.getElementById('webdev').style.display='none';
  document.getElementById('vr').style.display='none';
  document.getElementById('python').style.display='none';

    for(i=0;i<options.length;i++) {
      var text = options[i].innerHTML;
      if(text.includes(document.getElementById("searchBar1").value.toUpperCase()))
      {
        if(i==0)
          document.getElementById('webdev').style.display='inline-block';
          else if(i==1)
          document.getElementById('vr').style.display='inline-block';
          else
          document.getElementById('python').style.display='inline-block';
      }
      else
      {
        if(i==0)
          document.getElementById('webdev').style.display='none';
          else if(i==1)
          document.getElementById('vr').style.display='none';
          else
          document.getElementById('python').style.display='none';
          flag++;
      }
      /*
      for(j=0;j<elementLen;j++) {
        if(document.getElementById("searchBar").value.charAt(j).toUpperCase()!=text.charAt(16+j))
        {
          if(i==0)
          document.getElementById('webdev').style.display='none';
          else if(i==1)
          document.getElementById('vr').style.display='none';
          else
          document.getElementById('python').style.display='none';
          flag++;
          break;
        }
        else {
          if(i==0)
          document.getElementById('webdev').style.display='inline-block';
          else if(i==1)
          document.getElementById('vr').style.display='inline-block';
          else
          document.getElementById('python').style.display='inline-block';
        }
      }
      */
    }
    if(flag == options.length) {
      document.getElementById('contextText').style.display='inline';
    }
  }
  else {
    for(i=0;i<options.length;i++) {
      switch(i) {
        case 0:
        {
          if(document.getElementById('webdev').style.display=="none")
          document.getElementById('webdev').style.display="inline-block";
        }
        case 1:
        {
          if(document.getElementById('vr').style.display=="none")
          document.getElementById('vr').style.display="inline-block";
        }
        case 2:
        {
          if(document.getElementById('python').style.display=="none")
          document.getElementById('python').style.display="inline-block";
        }
      }
    }
  }
}

function searchDivs2() {
  var flag = 0;
  var elementLen = document.getElementById("searchBar2").value.length;
  var options = document.getElementsByClassName("coursename");
  document.getElementById('contextText').style.display='none';
  if(elementLen!=0)  {
  
    document.getElementById('webdev').style.display='none';
    document.getElementById('vr').style.display='none';
    document.getElementById('python').style.display='none';
  
      for(i=0;i<options.length;i++) {
        var text = options[i].innerHTML;
        if(text.includes(document.getElementById("searchBar2").value.toUpperCase()))
        {
          if(i==0)
            document.getElementById('webdev').style.display='inline-block';
            else if(i==1)
            document.getElementById('vr').style.display='inline-block';
            else
            document.getElementById('python').style.display='inline-block';
        }
        else
        {
          if(i==0)
            document.getElementById('webdev').style.display='none';
            else if(i==1)
            document.getElementById('vr').style.display='none';
            else
            document.getElementById('python').style.display='none';
            flag++;
        }
        /*
        for(j=0;j<elementLen;j++) {
          if(document.getElementById("searchBar").value.charAt(j).toUpperCase()!=text.charAt(16+j))
          {
            if(i==0)
            document.getElementById('webdev').style.display='none';
            else if(i==1)
            document.getElementById('vr').style.display='none';
            else
            document.getElementById('python').style.display='none';
            flag++;
            break;
          }
          else {
            if(i==0)
            document.getElementById('webdev').style.display='inline-block';
            else if(i==1)
            document.getElementById('vr').style.display='inline-block';
            else
            document.getElementById('python').style.display='inline-block';
          }
        }
        */
      }
      if(flag == options.length) {
        document.getElementById('contextText').style.display='inline';
      }
    }
    else {
      for(i=0;i<options.length;i++) {
        switch(i) {
          case 0:
          {
            if(document.getElementById('webdev').style.display=="none")
            document.getElementById('webdev').style.display="inline-block";
          }
          case 1:
          {
            if(document.getElementById('vr').style.display=="none")
            document.getElementById('vr').style.display="inline-block";
          }
          case 2:
          {
            if(document.getElementById('python').style.display=="none")
            document.getElementById('python').style.display="inline-block";
          }
        }
      }
    }
  }