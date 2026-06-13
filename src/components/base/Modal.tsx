import { XmarkSolid } from "@lineiconshq/free-icons"
import Lineicons from "@lineiconshq/react-lineicons"
import { AnimatePresence, motion } from "framer-motion"
import { useRef, type HTMLAttributes, type ReactNode } from "react"
import { createPortal } from "react-dom"

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean
    position?: "center" | "right" | "bottom"
    actions?: ReactNode
    onClose: () => void

}

const Modal = ({ position = "center", onClose, children, className, open, actions }: ModalProps) => {

    const overlayRef = useRef(null)

    // const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //   if (e.currentTarget == overlayRef.current) {
    //     onClose()
    //   }
    // }

    const handleClose = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }



    const overlayTransition = { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }
    const sheetTransition = { duration: 0.26, ease: [0.22, 1, 0.36, 1] as const }

    const content = (
        <AnimatePresence>
            {open &&
                <motion.div
                    key="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={overlayTransition}
                    onPointerDown={handleClose}
                    ref={overlayRef}
                    className={`fixed inset-0 z-50 flex bg-black/30 ${position === "right" ? "items-stretch justify-end" : "items-center justify-center"}`}>

                    {/* content  */}
                    {
                        position == "bottom"
                            ?
                            // bottom
                            <motion.div
                                key="modal-right-sheet"
                                initial={{ y: "18%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                onClick={(e) => e.stopPropagation()}
                                className={`h-[30vh] max-h-[80vh] overflow-auto w-full  overflow-y-auto border-l border-text-0/10 bg-ground-2 p-5 sm:p-6 md:max-w-xl md:p-8 sm:max-w-lg ${className ?? ""}`}
                            >
                                {children}
                            </motion.div>
                            :
                            position == "center"
                                ?

                                // center modal 
                                <motion.div
                                    key="modal-center-sheet"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 28, opacity: 0 }}
                                    transition={sheetTransition}
                                    onClick={(e) => e.stopPropagation()}
                                    className={`bg-ground-2 mx-3 sm:mx-4 w-[min(100%,28rem)] sm:w-[min(92vw,36rem)] md:w-[min(40vw,42rem)] max-h-[90dvh] rounded-lg p-4 sm:p-6 flex flex-col ${className ?? ""}`}
                                >

                                    {/* header - fixed at top, not scrollable */}
                                    <div className="flex mb-6 items-center justify-end shrink-0">
                                        <button onClick={onClose} className="hover:bg-ground-1">
                                            <Lineicons icon={XmarkSolid} />
                                        </button>
                                    </div>

                                    {/* content - scrollable */}
                                    <div className="flex-grow overflow-auto min-h-0">
                                        {children}
                                    </div>

                                    {/* actions - fixed at bottom, not scrollable */}
                                    {actions && (
                                        <div className="shrink-0 mt-4 pt-4 border-t border-text/10">
                                            {actions}
                                        </div>
                                    )}

                                </motion.div>

                                :

                                // right
                                <motion.div
                                    key="modal-right-sheet"
                                    initial={{ x: "18%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                    onClick={(e) => e.stopPropagation()}
                                    className={`h-full max-h-dvh w-full max-w-[87vw] overflow-y-auto border-l border-text-0/10 bg-ground-2 p-5 sm:p-6 md:max-w-xl md:p-8 sm:max-w-lg ${className ?? ""}`}
                                >
                                    {children}
                                </motion.div>


                    }

                </motion.div>
            }
        </AnimatePresence>
    )

    if (typeof document === "undefined") return null
    return createPortal(content, document.body)
}

export default Modal