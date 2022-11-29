import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState,useRef,useEffect } from 'react'
import {motion} from 'framer-motion'
import CustomCarousel from '../Components/Carousel'
export default function Home() {
  const [width, setWidth] = useState(0)
  const carousel=useRef(null)
  useEffect(() => {
    setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)


  }, [])


  const [dummycards]=useState([
    {
      id:1,
      title:"Card 1",
      description:"This is card 1"
    },
    {
      id:2,
      title:"Card 2",
      description:"This is card 2"
    },
    {
      id:3,
      title:"Card 3",
      description:"This is card 3"
    },
    {
      id:4,
      title:"Card 4",
      description:"This is card 4"
    },
    {
      id:5,
      title:"Card 5",
      description:"This is card 5"
    },
    {
      id:6,
      title:"Card 6",
      description:"This is card 6"
    },
  ])
  const [activeCard,setActiveCard]=useState(0)
  const [activeCardData,setActiveCardData]=useState(dummycards[0])
  const handleActiveCard=(id)=>{
    setActiveCard(id)
    setActiveCardData(dummycards[id-1])

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Product Design</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
   
      <motion.div ref={carousel} className={styles.carousel}
      whileTap={{cursor:"grabbing"}}
      >
        <motion.div 
        drag={width  > 0?"x":false}
        dragConstraints={{right:width,left:-width}}
        dragElastic={0.1}
        className={styles.innercarousel}>
          {dummycards.map((card,index)=>{
            return(
              <motion.div className={styles.card} key={index} onClick={()=>handleActiveCard(card.id)}>
                <motion.div className={styles.cardTitle}>
                  {card.title}
                </motion.div>
                <motion.div>
                  <img src="./product.jpg" alt="card image" className={styles.cardimage}/>
                </motion.div>
              </motion.div>
            )

          }
          )}
        
        
        </motion.div>
        
   
      </motion.div>
      </main>

        <footer className={styles.footer}>
          {activeCardData.title}
        </footer>
    </div>
  )
}
