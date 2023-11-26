//your code here!

const scrollContainer = document.getElementById("infi-list");

let count =1;
for(; count <=10; count++){
	const div = document.createElement("div");
	div.innerText = `item ${count}`;
	div.className = "item";
	scrollContainer.appendChild(div);
}

//count =11

scrollContainer.addEventListener("scroll", ()=>{
	let scrolledHeight= scrollContainer.scrollTop;
	let maxScrollableHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;

	if(maxScrollableHeight - scrolledHeight <= 5){
		addtwoMoreItems();
		
	}
})


function addTwoMoreItems(){
	const div1 = document.createElement("div");
	div1.innerText = `item ${count++}`;
	div1.className = "item";


	const div2 =document.createElement("div");
	div1.innerText = `item ${count++}`;
	div2.className = "item";

	// scrollContainer.appendChild(div1);
	// scrollContainer.appendChild(div2);


	scrollContainer.append(div1, div2);

	

	
}

