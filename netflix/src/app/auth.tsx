import Image from "next/image";



const Auth = () => {
    return(
        <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat
         bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50 ">
        <nav className="px-12 py-3">
        <img src="/images/logo.png" alt="logo">
        </img>
        </nav>
            </div>
        </div>
    );
    }


    export default Auth;