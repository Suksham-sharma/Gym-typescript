import {useState} from 'react';
import {Bars3BottomLeftIcon , XMarkIcon  } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from './link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';


type Props = {
    selectedPage : SelectedPage;
    setSelectedPage : (page : SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")

  return (
    <nav>
        <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>

                    {/* Left Side of the navbar */}
                    <img alt="logo" src={Logo} />
                </div>

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
                            <button>Become a Member</button>
                        </div>
                    </div>
                    ) : (
                    <div className="flex items-center justify-center">
                        Hello
                        </div>

                    )
                    }

            </div>
        </div>
    </nav>
  )
};

export default Navbar;