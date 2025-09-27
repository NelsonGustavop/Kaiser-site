import {InstagramLogoIcon} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import G4 from '../../../public/G4.png'
import G5 from '../../../public/G5.png'
import G1 from '../../../public/G1.png'
import { Check } from 'lucide-react'


export function About(){
    return(
        <section className="bg-white py-16">
            <div className="container px-4 mx-auto ">
                <div className=' grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>


                      <div className='relative '>

                    <div className='w-full h-[350px] rounded-3xl overflow-hidden'>
                        <Image
                        src={G1}
                        alt='Erro'
                        fill
                        quality={100}
                        className='object-cover hover:scale-110 duration-300'
                        priority
                        />
                    </div>

                </div>
                    <div className='space-y-6'>
                        <h2 className=' text-4xl font-bold'>SOBRE</h2>
                        <p>
                            Nossa missão é redefinir os limites do possível. 
                            Nos dedicamos ao refinamento e aprimoramento máximo de produtos, criando soluções e tecnologias que são verdadeiramente incomparáveis.Não seguimos tendências. Nós as criamos.
                             A nossa abordagem é sempre orientada para o futuro, projetando soluções que hoje podem parecer impossíveis, mas que logo serão essenciais.
                            </p>
                            <ul className='space-y-4'>
                                <li className='flex items-center gap-2'>
                                    <Check className='text-emerald-500'/>
                                    CALCULO E GEOMETRIA AVANÇADA

                                </li>
                            </ul>

                            <ul className='space-y-4'>
                                <li className='flex items-center gap-2'>
                                    <Check className='text-emerald-500'/>
                                    LINGUAGENS DE ALTA PERFORMANCE

                                </li>
                            </ul>
                            <ul className='space-y-4'>
                                <li className='flex items-center gap-2'>
                                    <Check className='text-emerald-500'/>
                                    COMPROMISSO COM O CLIENTE E COM NOSSOS IDEAIS

                                </li>
                            </ul>
                            <ul className='space-y-4'>
                                <li className='flex items-center gap-2'>
                                    <Check className='text-emerald-500'/>
                                    FISICA CONCEITUAL E APLICADA

                                </li>
                            </ul>

                            <a
                             href="https://www.instagram.com/kaiser__performance/" className='bg-fuchsia-800 text-white flex items-center justify-center w-fit gap-2 px-4 py-2' >
                               <InstagramLogoIcon  className='w-5 h-5 text-white' rounded-md/>
                               INSTAGRAM
                            </a>

                    </div>
                </div>

          
            </div>
        </section>
    )
}