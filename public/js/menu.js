// função responsavel pela abertura e fechamento do menu lateral
function openNav() {
    document.getElementById("mySidebar").style.width = "340px";
    document.getElementById("main").style.marginLeft = "340px";
  }
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
// funções responsaveis para o background "preto" quando o menu lateral é aberto
function bgmenu() {
  document.getElementById('bg-menu').style.height = '2000px'
}
function bgmenuClose() {
  document.getElementById('bg-menu').style.height = '0vh'
}  

