const dataTest = [ { "day": "mon", "amount": 17.45 }, { "day": "tue", "amount": 34.91 },
 				   { "day": "wed", "amount": 52.36 }, { "day": "thu", "amount": 31.07 },
				   { "day": "fri", "amount": 23.39 }, { "day": "sat", "amount": 43.28 },
				   { "day": "sun", "amount": 25.48 } ]

const chartBar = document.querySelectorAll("[class*='bar-']")

let data = dataTest.map((item ) => Math.round(item.amount))
let maxi =  Math.max(...data)
let idmaxi = data.indexOf(maxi)
let height = data.map((item) => 100 - Math.round(item*100/maxi))
let blk_total = document.querySelector('.footer-card h2')
blk_total.innerHTML = '$' + data.reduce((Sum, a) => Sum + a, 0);


chartBar.forEach((item,index) => {
	item.style.gridRowStart = height[index]
	item.firstChild.style.bottom = (item.clientHeight+5) + 'px'
	item.firstChild.innerHTML = '$ ' + dataTest[index].amount
	
})

chartBar[idmaxi].style.background = 'hsl(186, 34%, 60%)'