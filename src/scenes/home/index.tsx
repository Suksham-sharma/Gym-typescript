import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import ActionButton from '@/shared/actionButton';
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage : (page : SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (<section
     id="Home" className='gap-16 bg-gray-20 pb-10 pt-20 md:h-full md:pb-0'
    >
        {/*Image and Main Header*/}

        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
        >
            {/* Main Header */}
            <div className='z-10 mt-32 md:basis-3/5'>

                {/* Headings*/}
                <motion.div className='md:-mt-20'
                initial='hidden'
                whileInView= "visible"
                viewport={{amount:0.5}}
                transition={{duration: 1}}
                variants={{
                    hidden: { opacity: 0, x:-70 },
                    visible: { opacity: 1, x:0 },
                }}

                >
                    <div className='relative'>
                        <div className='before:absolute before:-top-14 before:-left-16 before:z-[-1] md:before:content-evolvetext'>
                            <img src={HomePageText} alt="Home Page Text" />
                        </div>
                    </div>
                    <p className='my-8 text-sm'>
                        <p className='text-lg'>Unrivaled Gym . Unrivaled Community . Unrivaled Results</p>
                        
                        Join Now to get the Body you Dream of ....
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div className='flex items-center gap-8 md:justify-start '
                initial='hidden'
                whileInView= "visible"
                viewport={{amount:0.5}}
                transition={{delay:0.3,duration: 2}}
                variants={{
                    hidden: { opacity: 0, x:-70 },
                    visible: { opacity: 1, x:0 },
                }}
                >
                    <ActionButton setSelectedPage ={setSelectedPage} >
                        Join Now
                    </ActionButton>
                    <AnchorLink
                        className="text-sm  text-primary-500 underline hover:text-secondary-500 transition-all duration-300 ease-in-out"
                        onClick={() => {setSelectedPage(SelectedPage.ContactUs)}}
                        href = {`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* Image */}

            <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                <img  src={HomePageGraphic} alt="Home Page Graphic" />
            </div>
        </motion.div>

        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='flex mx-auto w-5/6'>
                    <div className='flex items-center w-3/5 justify-between gap-8 '>
                        <img src={SponsorRedBull} alt="Sponsor RedBull" />
                        <img src={SponsorForbes} alt="Sponsor Forbes" />
                        <img src={SponsorFortune} alt="Sponsor Fortune" />
                    </div>
                </div>
            </div>
        ) }
    
    </section>
  )
}
export default Home;