import {useState} from 'react';
import {Bars3BottomLeftIcon , XMarkIcon  } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from './link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/actionButton';


type Props = {
    selectedPage : SelectedPage;
    setSelectedPage : (page : SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
        <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>

                    {/* Left Side of the navbar */}
                    <img alt="logo" src={Logo} />
                

                {/* Right Side of the navbar */}
                {isAboveMediumScreens ? (
                
                    <div className={`${flexBetween} w-full `}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page='Benifits'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page='Our Classes'
                                selectedPage={selectedPage}
                                setSelectedPage ={setSelectedPage}
                            />
                            <Link 
                                page='Contact us'
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            

                        </div>

                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign In</p>
                            <ActionButton setSelcetedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                    </div>
                    ) : (
                    <button className="rounded-full  bg-secondary-500 p-2" onClick={() => setIsMenuToggled(isMenuToggled)}>
                        <Bars3BottomLeftIcon className='h-6 w-6 text-white' />
                    </button>

                    )
                    }

            </div>
        </div>
    </div>
</nav>
  )
};

export default Navbar;