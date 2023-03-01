import ActionButton from '@/shared/actionButton'
import HText from '@/shared/hText'
import {BenifitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benifit from './Benifit'
import BenifitsPageGraphics  from '@/assets/BenefitsPageGraphic.png'

const benifits: Array<BenifitType> = [
    {
        icon: <HomeModernIcon className='h-8 w-8 ' />,
        title: 'State of the Art Facilities',
        description: 'We provide world class equipment to help you achieve your fitness goals.'
    },
    {
        icon: <UserGroupIcon className='h-8 w-8 ' />,
        title: 'True Care and Support',
        description: 'We provide true care and support to our members. We are a family.'
    },
    {
        icon: <AcademicCapIcon className='h-8 w-8 ' />,
        title: 'World Class Trainers',
        description: 'We provide world class training and equipment to help you achieve your fitness goals.'
    }
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren :0.3}
    }
}

type Props = {
    setSelectedPage: (page: SelectedPage) => void
}

const Benifits = ({setSelectedPage}: Props) => {
  return (
    <section
    id='benifits'
    className="mx-auto min-h-full w-5/6 p-20">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
        >
            {/* HEADER SECTION */}
            <motion.div 
            className='md:my-5 md:w-3/5'
            initial='hidden'
            whileInView= "visible"
            viewport={{amount:0.5}}
            transition={{duration: 1}}
            variants={{
                hidden: { opacity: 0 , x:-60 },
                visible: { opacity: 1, x:0  },
            }}
            >
                <HText>MORE THAN JUST GYM</HText>
                <p className='my-5 text-sm'>
                    We are a community of people who are passionate about fitness and 
                    helping others achieve their goals. We provide world class training
                    and equipment to help you achieve your fitness goals. We provide 
                    true care and support to our members. We are a family.
                </p>
            </motion.div>

            {/* BENIFITS SECTION */}
            <motion.div 
            className='md:flex items-center justify-between mt-5 gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{amount:0.5}}
            variants = {container}
            >
                {benifits.map((benift: BenifitType) =>(
                <Benifit
                key={benift.title}
                icon={benift.icon}
                title={benift.title}
                description={benift.description}
                setSelectedPage={setSelectedPage}
                />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION SECTION */}
            <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                {/* GRAPHICS SECTION */}
                <img className='mx-auto'
                alt='benifits page graphics'
                src={BenifitsPageGraphics}
                />
                {/* DESCRIPTION SECTION */}
                <div>
                    {/* TITLE */}
                    <motion.div
                    className='relative'
                    initial='hidden'
                    whileInView= "visible"
                    viewport={{amount:0.5}}
                    transition={{duration: 1}}
                    variants={{
                        hidden: { opacity: 0 , x:60 },
                        visible: { opacity: 1, x:0  },
                    }}
                    >
                        <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-abstractwaves'>
                            <div>
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className='text-primary-500'>FIT</span>
                                </HText>
                            </div>
                        </div>
                    </motion.div>

                    {/* DESC */}
                    <div>
                        <p className='my-5'>
                        We are a unique, out-of-the-box health club, where our clients experience the phenomenal variety of fitness programs.
                        Our mission is to eliminate monotony in workouts and make it a fun-filled, productive experience to bring about transformational changes in the lives of our clients.
                        It is our passion to deliver a spectacular platform and motivate our local communities to engage in fitness, sports and work towards a healthy life, both physically and mentally.
                        </p>

                        <p className='mb-5'>
                            We'll help you to transform into a body you've always dreamed of.
                            With our best in class trainers and equipment, we'll help you to
                            achieve your fitness goals.
                            We're a community of people who are passionate about fitness and
                            helping others achieve their goals. We have everything you need.
                            What are you waiting for?
                        </p>
                    </div>

                    {/* BUTTON SECTION */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                     </div>
                </div>
            </div>
        </motion.div>

    </section>
  )
}

export default Benifits