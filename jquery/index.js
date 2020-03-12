let emp = {
	Name: "Ram",
	Gender: "Male",
	Salary: 10000
};

let s = JSON.stringify({ emp: emp });
let n = "{emp: " + JSON.stringify(emp) + "}";
console.log(n);
console.log(s);
