"use client"
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, CpuIcon, CodeIcon, PowerIcon, ZapIcon, LightbulbIcon, Cog, FactoryIcon, Icon, Star} from 'lucide-react'
import { title } from 'process'



const services = [

  {
    title:"Solid Works(Modelagem 3D)",
    description:"Precisa de uma maquina pra resolver seus problemas, mas ela não existe no mercado? Nós fazemos! Com um Software de modelagem podemos tranformar sua imaginação em realidade",
    price:"Envie-nos uma mensagem no Instagram e faça seu orçamento!",
    Icon: <FactoryIcon/>

  },
  {
    title:"Landing Pages de alta performance",
    description:"O que seria a Google, Apple ou até mesmo a Microsoftware se não tivessem investido tanto em marketing? Uma landing page pode elevar o nível do seu négocio demonstrando seus serviços de forma lógicam, coerente e agradável",
    price:"Envie-nos uma mensagem no Instagram e faça seu orçamento!",
    Icon: <CodeIcon/>

  },
  {
    title:"Automação com arduino",
    description:"Qual o limite da eficiência e da automação? Lhe digo meu caro(a) que esse limite não existe para nós nem para você, quer enviar flores para sua amada(o) toda sexta-feira as 14:30? Nós fazemos",
    price:"Envie-nos uma mensagem no Instagram e faça seu orçamento!",
    Icon: <CpuIcon/>

  },
  {
    title:"Aperfeiçoamento de estátisticas",
    description:"Dados equivocados podem causar desastres colossais, no Japão por exemplo, um erro estátistico sobre Tsunamis custou milhares de vidas, mas na Kaiser, buscamos o algo que se aproxima ao perfeição infinita(Piada de calculo)",
    price:"Envie-nos uma mensagem no Instagram e faça seu orçamento!",
    Icon: <PowerIcon/>

  },


] 


export function Service(){

  const [emblaRef, emblaApi] = useEmblaCarousel({

    loop:true,
    align:"start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": {slidesToScroll:3}
    }



  })

  function scrollNext(){
    
      emblaApi?.scrollNext();


  }
  function scrollprev(){
    
      emblaApi?.scrollPrev();


  }
    return(

        <section className="bg-white py-16 ">
            <div className="container mx-auto px-4  ">
                <div>
                  <h2 className="text-4xl font-bold mb-12">
                    SERVIÇOS
                  </h2>
                  <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                          {services.map((item, index)=> (
                            <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                <article className='bg-black text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                  <div className=' flex-1 flex items-center flex-start justify-between'>
                                      <div className='flex gap-3'>
                                        <span className=' text-3xl  text-emerald-500'>{item.Icon}</span>
                                        <div>
                                          <h3 className='font-bold text-blue-600 text-xl mb-1 my-1'>{item.title}</h3>
                                          <p className='select-none'>
                                            {item.description}</p>
                                        </div>
                                      </div>
                                  </div>
                                </article>
                            </div>
                          ))}
                        </div>


                    </div>
                          
                         <button
                            className="text-white absolute top-1/2 left-3 -translate-y-1/2 rounded-full shadow-lg w-10 h-10 flex items-center justify-center z-20"
                            onClick={scrollprev}
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>

                          <button
                            className="text-white absolute top-1/2 right-3 -translate-y-1/2 rounded-full shadow-lg w-10 h-10 flex items-center justify-center z-20"
                            onClick={scrollNext}
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>

                            
                        


                  </div>
                </div>
            </div>

        </section>


    )}