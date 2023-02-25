import HText from '@/shared/hText'
import {BenifitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benifit from './Benifit'

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
            <div className='md:my-5 md:w-3/5'>
                <HText>MORE THAN JUST GYM</HText>
                <p className='my-5 text-sm'>
                    We are a community of people who are passionate about fitness and 
                    helping others achieve their goals. We provide world class training
                    and equipment to help you achieve your fitness goals. We provide 
                    true care and support to our members. We are a family.
                </p>
            </div>

            {/* BENIFITS SECTION */}
            <div className='md:flex items-center justify-between mt-5 gap-8'>
                {benifits.map((benift: BenifitType) =>(
                <Benifit
                key={benift.title}
                icon={benift.icon}
                title={benift.title}
                description={benift.description}
                setSelectedPage={setSelectedPage}
                />
                ))}
            </div>
        </motion.div>

    </section>
  )
}

export default Benifits