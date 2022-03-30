const removePaidArticles = () => {
	const flags = document.body.querySelectorAll('.flagPaid')
	
	for(let i=flags.length - 1; i >=0; i--) {
		const article = flags[i].closest('article')
		
		if (article !== null) {
			const tabo = article.closest('taboola')
			
			if (tabo !== null) {
				tabo.remove()
			} else {			
				article.remove()
			}
		}
	}
	
	const listPaid = document.body.querySelectorAll('.modContent .flagPaid')
	
	for(let i=listPaid.length - 1; i >=0; i--) {
		const article = listPaid[i].closest('li')
		
		if (article !== null) {	
			article.remove()
		}
	}
	
	['.ua-trackevent', '.UA-trackEvent', '.headerTopRight', '#liseuse', "#abo"].forEach(selector => {
		const targets = document.body.querySelectorAll(selector)
		
		for(let i=targets.length - 1; i >=0; i--) {
			targets[i].remove()
		}
	})
}

removePaidArticles()
