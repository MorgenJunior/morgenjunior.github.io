//Fuction with quotes
function MyQuotes(){
    document.getElementById("quotes").innerHTML=("-Nonsense Remains Nonsense, Even When Spoken By a Famous Scientist ~John Lenox. \n -A Journey Of a Thousand Light Years Begins With a Single step ~High T.\n -Compound Interest is The 8th Wonder Of The Word, He Who Understands It Earns It, He Who Doesn`t, Pays It ~Albert Einsten. ");
}


/**------------------------------------------------------------------------------------------
    DROPDOWN MENU BAR
  
 --------------------------------------------------------------------------------------------------*/
function openNav(){
    document.getElementById('open').style.display="none ";
    document.getElementById('Nav').style.width="100%";
}
  
function closeNav(){
    document.getElementById('Nav').style.width="0%";
    document.getElementById('open').style.display="block";
} 