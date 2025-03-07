let arr=['Red','Green','White','Black']

function deleteItem()
{
	let val=document.getElementById('colorSelect').value;
	let sela=document.getElementById('colorSelect');
	
	sela.innerHTML="";
	arr = arr.filter(color => color !== val);
	
	arr.forEach((item)=>{
			sela.innerHTML+=`
				<option>${item}</option> 
			`
	})
}