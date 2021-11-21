//Schrijf hier je JavaScript-code
<html>

  <script>
  	let ds = [
 			[0,0,0,0,0,0,0,0],
 			[0,0,0,0,0,0,0,0],
  		[0,0,0,0,0,0,0,0],
  		[0,0,0,1,2,0,0,0],
 		 	[0,0,0,2,1,0,0,0],
  		[0,0,0,0,0,0,0,0],
  		[0,0,0,0,0,0,0,0],
  		[0,0,0,0,0,0,0,0]
  ]
 	 	let celBreedte = 70;
  	let spatie = 2
  	let graybBackground;
  	let beurt = 1
  
  
  ]
  
  	window.onload=function()
  {
  		grayBackground = document.getElementById("grayBackground");
      discLayer = document.getElementById("discLayer")
    	grayBackground.style.height = celBreedte*8 +(spatie*9)
   	 	grayBackground.style.width = celBreedte*8 +(spatie*9)
    	maakVakjes();
    
   }
   
   	function maakVakjes()
   	{
   		for (let rij = 0; rij <8; rij ++)
   		{
        for (let kolom = 0; kolom < 8; kolom++)
      	{
        	let vakjes = document.createElement("div");
          vakjes.style.height = celBreedte;
          vakjes.style.width = celBreedte;
          vakjes.style.position = "absolute";
          vakjes.style.backgroundColor = "brown";
          vakjes.style.left = (celBreedte+spatie)*kolom + spatie;
          vakjes.style.top = (celBreedte+spatie)*rij + spatie;
          vakjes.setAttribute("onclick","selectie("+rij+","+kolom+")");
          
          grayBackground.appendChild(vakjes);
          
         }
        }
      }
      function selectie(rij,kolom)
      {
      	if (ds[rij,kolom] != 0)
        {	
        	return
         }
      	if (klikbaar(rij,kolom) == true)
        {
        	let at = gat(rij,kolom)
          omdraaien(at);
          ds[rij][kolom] = beurt;
          if (beurt ==2) beurt =1;
          else beurt =2;
          tekends();
        }
        
        
      
      
      }
      function klikbaar(rij,kolom)
      {
      	let at = gat(rij,kolom);
        if (at.length == 0) return false;
        else return true;
     
   
      }
      function omdraaien()
      {
      for (let i = 0 < at.Length; i++)
      {
      	let plaats = at[i];
        if (ds[plaats.rij][plaats.kolom] == 1)
        {
        	ds[plaats.rij][plaats.kolom] = 2;
          
        
        }
        else
        {
        	disc[plaats.rij][plaats.kolom] = 1;
        
        }
      	
      
      }
      
      
      }
      function gat(rij,kolom)
      {
      	
      	let at = [];
        let cba = [];
        let nkolom = kolom;
        while (nkolom < 7)
        {
        	nkolom += 1;
          let vas = ds[rij][nkolom];
          if (vas == 0 || vas == beurt)
          {
          	if (vas == beurt)
            {
            	at = at.concat(cba);
            }
            break;
            
          }
          else
          {
          	let dl = {rij:rij,kolom:nkolom};
            cba.push(dl);
         
          }
        
        
        }
      }
      
      
      	let at = [];
        let cba = [];
        let nkolom = kolom;
        while (nkolom > 0)
        {
        	nkolom -= 1;
          let vas = ds[rij][nkolom];
          if (vas == 0 || vas == beurt)
          {
          	if (vas == beurt)
            {
            	at = at.concat(cba);
            }
            break;
            
          }
          else
          {
          	let dl = {rij:rij,kolom:nkolom};
            cba.push(dl);
         
          }
        
        
        }
      }
      	let at = [];
        let cba = [];
        let nrij = rij;
        while (nrij > 0)
        {
        	nrij +=1;
          let vas = ds[nrij][kolom];
          if (vas == 0 || vas == beurt)
          {
          	if (vas == beurt)
            {
            	at = at.concat(cba);
            }
            break;
            
          }
          else
          {
          	let dl = {rij:nrij,kolom:kolom};
            cba.push(dl);
         
          }
        
        
        }
      }
      let at = [];
        let cba = [];
        let nkolom = kolom;
        while (nkolom < 7)
        {
        	nkolom +=1;
          let vas = ds[rij][nkolom];
          if (vas == 0 || vas == beurt)
          {
          	if (vas == beurt)
            {
            	at = at.concat(cba);
            }
            break;
            
          }
          else
          {
          	let dl = {rij:rij,kolom:nkolom};
            cba.push(dl);
         
          }
        
        
        }
      }
      
     
      function tekends()
      {
      	discLayer.innerHTML = "";
        for (let kolom = 0; kolom < 8; kolom++)
        {
        	for (let rij = 0; rij <8; rij++)
          {
          	let waarde = ds[rij][kolom];
            if (waarde == 0)
            {
            
            
            }
            
            else
            {
            	let ds = document.createElement("div");
              ds.style.height = celBreedte;
              ds.style.borderRadius = "50%";
              ds.style.width = celBreedte;
              ds.style.position = "absolute";
              ds.style.left = (celBreedte+spatie)*kolom + spatie;
              ds.style.top = (celBreedte+spatie)*rij + spatie;
              discLayer.appendChild(ds);
              
              if (value == 2)
              {
              	ds.style.backgroundColor = "white";
              }
              if (value ==1)
              {
              	ds.style.backgroundColor = "black";
              
              }
      
            }
          }
        
        
        }
      }
      
	</script>
  
  <div id="grayBackground" style="position:absolute;left:0;top:0;background-colour:gray;height:800;width:800;"></div>"
 
</html>
