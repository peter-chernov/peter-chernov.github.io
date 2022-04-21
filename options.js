function options(version) {
  if(verison < 001) {
    var link = document.createElement('a');
    link.setAttribute('href', "./download.js"); 
    link.setAttribute('download', "download");
    link.setAttribute('target','_blank');
    link.style.display = 'none';
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link);
  }
}
