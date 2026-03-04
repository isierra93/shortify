export const steps = ["Subir", "Seleccionar", "Generar", "Descargar"];
export default function Timeline({ currentStep }: { currentStep: number }) {
    return (
        <div className="m-auto mt-17.5 mb-20 flex w-full items-center justify-center px-5 text-gray-400 sm:px-12 md:px-39 lg:px-0">
            <div
                className={`flex h-16.5 w-full max-w-117.5 items-center justify-center gap-2 font-semibold sm:gap-4 md:gap-6`}
            >
                {steps.map((label, index) => {
                    const stepNumber = index + 1;
                    const isActive = stepNumber === currentStep;
                    const isCompleted = stepNumber < currentStep;

                    return (
                        <div
                            key={stepNumber}
                            className="relative flex items-start gap-4 sm:w-50 sm:gap-6"
                        >
                            {/*círculo */}
                            <div
                                className={`flex flex-col items-center justify-center`}
                            >
                                <div
                                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all duration-300 sm:h-10 sm:w-10 sm:text-base ${
                                        isActive
                                            ? "animate-stepActive border-4 border-fuchsia-100/60 bg-[#2F27CE] text-white"
                                            : isCompleted
                                              ? "border border-indigo-600 bg-indigo-100 text-indigo-600"
                                              : "bg-[#F2F2F7] text-gray-400"
                                    }`}
                                >
                                    {stepNumber}
                                </div>
                            </div>

                            {/* Línea */}
                            {index < steps.length - 1 && (
                                <div className="flex items-center">
                                    <div
                                        className={`mt-4 h-0.5 w-8 transition-all duration-300 sm:mt-5 sm:w-7.5 md:w-14 ${
                                            isCompleted
                                                ? "bg-indigo-600"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                </div>
                            )}

                            <div
                                className={`absolute ${index == 0 && "text-black"} top-12 left-4 -translate-x-1/2 text-center text-xs whitespace-nowrap sm:text-sm`}
                            >
                                {label}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
