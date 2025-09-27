import {WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import kaiser from '../../../public/kaiser.png'
import G1 from '../../../public/G1.png'
import G2 from '../../../public/G2.png'
import G3 from '../../../public/G3.png'
import Image from 'next/image'



export function Hero(){
    return(
        <section className="bg-black text-white relative overflow-hidden">
           <div>
            <Image
                       src={kaiser} 
                       alt='erro'
                       fill
                       sizes='100vw'
                       priority
                       className='object-cover opacity-60 lg:hidden'
                       
                       />
                       <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
           </div>

            <div className='container mx-auto pt-16 pb-16 md:pb0 relative'
            > 
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    
                    <div className='space-y-1   0 pt-16 pb-16 md:pb0 relative'>

                        <h1 className="text-3x1 font-bold md:text-4xl lg:text-5xl leading-10 text-white"
                        >
                            BEM VINDO A REVOLUÇÃO DA TECNOLOGIA</h1>
                        <div className='hidden md:block h-full'>
                            <Image
                       src={G3} 
                       alt='logo'
                        className='object-contain'
                       />
                        </div>
                    </div>
                    

                    <p className="lg:text-lg" ><b>Prepare-se para uma experiência transformadora. 
                            Estamos prontos para levar você além dos limites da inovação e proporcionar um impacto. 
                            O que você está prestes a vivenciar será uma verdadeira revolução.</b></p>

                    <div className="  hidden md:block h-full">
                        <div className=''>
                       <Image
                       src={kaiser} 
                       alt='logo'
                       className='object-contain'
                        fill
                        sizes='(max-width:760px) 0px, 50vw'
                        quality={100}
                        priority
                       />
                        </div>
                       

                        <div className="mt-8">
                            <p className=" text-sm mb-4">
                        <b className="bg-black text-white px-2 py-1 rounded-md"><b>VAMOS CONQUISTAR O FUTURO JUNTOS</b></b>
                            </p>
                            <a href="#"
                        className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit">

                            <WhatsappLogoIcon className='w-5 h-5' data-aos="fade-up"/> Contato
                        </a>
                            </div>
                            
                    </div>
                    
                    
                </article>
                
            </div>




        </section>
    )
}