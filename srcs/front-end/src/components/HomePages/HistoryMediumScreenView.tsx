
import { Press_Start_2P } from "next/font/google";
import { Space_Mono } from "next/font/google";
import Image from "next/image";


const pixelfont = Press_Start_2P({
    subsets: ['latin'],
    weight: ['400'],
  });


const mono = Space_Mono({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '700'],
})
export default function HistoryMediumScreenView() {
    return (
        <div className="md:max-2xl:flex hidden items-center justify-between flex-col h-full p-[5%] overflow-auto">
            <div className="flex items-center justify-evenly gap-x-14 mt-[15%]">
                <div className="flex justify-normal items-start flex-col gap-y-8 w-[40%]">
                    <h2 className={`text-[50px] text-[#343CFF] ${pixelfont.className}`}>History</h2>
                    <p   className={`${mono.className} text-[#0D0149] text-[13px]`}>
                        Pong, a simple yet groundbreaking game, was released in 1972 by the American game manufacturer Atari, Inc.
                        It was one of the earliest video games and its popularity helped to launch the video game industry.
                        The original Pong consisted of two paddles that players used to volley a small ball back and forth across a screen.
                    </p>
                    <p   className={`${mono.className} text-[#0D0149] text-[13px]`}>
                        The game was created by Allan Alcorn as a training exercise assigned to him by Atari co-founder Nolan Bushnell.
                        Bushnell and Atari co-founder Ted Dabney were surprised by the quality of Alcorn’s work and decided to manufacture the game.
                        The concept of the game was based on an electronic ping-pong game included in the Magnavox Odyssey, which was the first home video game console.
                    </p>
                    <p   className={`${mono.className} text-[#0D0149] text-[13px]`}>
                        In response to Pong’s success, Magnavox later sued Atari for patent infringement.
                        Despite this, Pong was the first commercially successful video game, and it helped establish the video game industry along with the Magnavox Odyssey.
                        After its release, several companies began producing games that closely mimicked its gameplay.
                    </p>
                    <p   className={`${mono.className} text-[#0D0149] text-[13px]`}>
                        During the 1975 Christmas season, Atari released a home version of Pong exclusively through Sears retail stores.
                        The home version was also a commercial success and led to numerous clones.
                        The game has been remade on numerous home and portable platforms following its release.
                        Today, Pong is part of the permanent collection of the Smithsonian Institution in Washington, D.C., due to its cultural impact.
                    </p>
                </div>
                <Image src="/PongCodeTheClassics.png" alt="ping game" width={350} height={500}/>
            </div>
            <h6 className={`${mono.className} text-[#0D0149] text-center text-[10px] mt-[15px]`}>© 2023 retro ping pong. All rights reserved.</h6>
        </div>
    );
}