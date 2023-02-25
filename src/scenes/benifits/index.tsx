import HText from '@/shared/hText'
import { SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'


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
            <div>
                <HText>MORE THAN JUST GYM</HText>
            </div>

        </motion.div>

    </section>
  )
}

export default Benifits