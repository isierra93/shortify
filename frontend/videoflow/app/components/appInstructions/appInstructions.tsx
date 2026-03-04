export default function AppInstructions() {
    return (
        <section className="mx-12.5 mt-22.5 mb-19.25 md:mx-25 lg:mx-46.75 2xl:mx-87.5">
            <div className="rounded-3xl bg-[#433BFF] p-5 text-white sm:p-6.25 md:p-7.5 lg:p-10 2xl:p-11.25">
                <h2 className="mb-6 text-[27px] font-bold sm:text-[27px] md:mb-8 md:text-[33px] lg:text-[41px]">
                    ¿Cómo funciona?
                </h2>

                <div className="mt-6 space-y-6 md:mt-8 md:space-y-8">
                    {/* Item 1 */}
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                        <div className="flex items-center gap-3 md:gap-0">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2F27CE] text-base text-[21px] font-bold text-white md:h-12 md:w-12">
                                1
                            </span>
                            <h4 className="ml-1 text-base text-[21px] font-bold md:hidden">
                                Subí tu video
                            </h4>
                        </div>
                        <div>
                            <h4 className="mb-2 hidden text-[21px] font-bold md:block">
                                Subí tu video
                            </h4>
                            <p className="text-sm text-[14px] leading-relaxed text-white/90 sm:text-[17px] md:text-base">
                                Hacé clic para explorarlo desde tu dispositivo.
                                Una vez cargado, vas a poder visualizarlo
                                directamente en la plataforma.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                        <div className="flex items-center gap-3 md:gap-0">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2F27CE] text-base text-[21px] font-bold text-white md:h-12 md:w-12">
                                2
                            </span>
                            <h4 className="ml-1 text-base text-[21px] font-bold md:hidden">
                                Seleccioná el fragmento
                            </h4>
                        </div>
                        <div>
                            <h4 className="mb-2 hidden text-[21px] font-bold md:block">
                                Seleccioná el fragmento
                            </h4>
                            <p className="text-sm text-[14px] leading-relaxed text-white/90 sm:text-[17px] md:text-base">
                                Elegí el inicio y el final del fragmento que
                                querés convertir en short. Podés previsualizar
                                el contenido mientras ajustás el recorte para
                                asegurarte de que el resultado sea exactamente
                                el que necesitás.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                        <div className="flex items-center gap-3 md:gap-0">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2F27CE] text-base text-[21px] font-bold text-white md:h-12 md:w-12">
                                3
                            </span>
                            <h4 className="ml-1 text-base text-[21px] font-bold md:hidden">
                                Generá el short
                            </h4>
                        </div>
                        <div>
                            <h4 className="mb-2 hidden text-[21px] font-bold md:block">
                                Generá el short
                            </h4>
                            <p className="text-sm text-[14px] leading-relaxed text-white/90 sm:text-[17px] md:text-base">
                                Con el fragmento seleccionado, generá tu short
                                automáticamente. El sistema adapta el video a un
                                formato optimizado para redes sociales,
                                manteniendo una buena calidad visual.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                        <div className="flex items-center gap-3 md:gap-0">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2F27CE] text-base text-[21px] font-bold text-white md:h-12 md:w-12">
                                4
                            </span>
                            <h4 className="ml-1 text-base text-[21px] font-bold md:hidden">
                                Descargá el resultado
                            </h4>
                        </div>
                        <div>
                            <h4 className="mb-2 hidden text-[21px] font-bold md:block">
                                Descargá el resultado
                            </h4>
                            <p className="text-sm text-[14px] leading-relaxed text-white/90 sm:text-[17px] md:text-base">
                                Previsualizá tu short final y descargalo sin
                                marca de agua. El archivo queda listo para
                                publicar o reutilizar cuando quieras.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}