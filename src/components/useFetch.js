import { useState, useEffect} from 'react'

const useFetch = (data) => {
    const [cards, setCards] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(cards)
      
      .then(e => {
        setIsPending(false);
        setCards(data)
      })
    }, 1500);

     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



    return  {  cards, isPending} ;
}
 
export default useFetch;