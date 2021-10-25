class DataSource{

	//empty constructor, optional, but left in for clarity
	constructor(){}
  
  /* Gets Prices from API
	* @return {Promise}   Promise provides the prices
	*/
  getPrices(){
  	return new Promise((resolve, reject) => {
      fetch("https://static.ngnrs.io/test/prices").then(
      	resp => resp.json()
      ).then(
				data => {
					data.data.prices.forEach((price) => {
          	price.mid = function(){
            	return ((price.buy/100 + price.sell/100) / 2).toFixed(2);
            }
            
            price.quote = function(){
            	return price.pair.slice(-3);
            }
          })
          resolve(data.data.prices);
        }
      ).catch(
				err => reject(err)
			)
    }).catch(
			err => reject(err)
		);
  }
	
}


// Testing
const ds = new DataSource();
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.log(error);
    });