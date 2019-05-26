import useGetFetch from './useGetFetch';

function useFilterInputValue(value) {
    const { data: infoData } = useGetFetch('coins')
    const { data: exchangesData } = useGetFetch('markets')

    const regex = /\{\{(.*?)\}\}/g

    let filteredValue = value && value.replace(regex, (matched) => {
      const trimmedMatchedTable = matched.slice(2,-2).trim().toUpperCase().split('/')
      const coinProperty = trimmedMatchedTable[0].trim()
      const coin = trimmedMatchedTable[1].trim()
      let coinName, coinValue
      infoData.map(item => {
        if(item.symbol === coin) {
          coinName = item.name
        }
        return coinName
      })

      switch(coinProperty) {
        case 'PRICE':
            exchangesData.map(item => {
                if(item.base_currency_name === coinName) {
                    coinValue = item.quotes.USD.price
                }
                return coinValue
            })
            return coinValue
        case 'NAME':
            return coinName
        case 'SYMBOL':
            return coin
        default:
            return
      }
    })
    return {
        filteredValue
    }
}

export default useFilterInputValue;