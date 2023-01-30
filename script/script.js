const Bill = () => {
	let billamount = document.getElementById("bamount").value;
	let tipercentage = document.getElementById("tpercentage").value;
	let tip = billamount * (tipercentage / 100);
	let total = tip + Number(billamount);
	document.getElementById("ttamount").value = tip;
	document.getElementById("tbamount").value = total;
};
