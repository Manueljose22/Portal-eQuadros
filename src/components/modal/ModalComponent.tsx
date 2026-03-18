import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Bank, CurrencyCircleDollar } from "phosphor-react";

interface Props {
    open: boolean;
    onClose: () => void;
    image: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
};



export default function ModalComponent({ open, onClose, image, title, paragraph1, paragraph2, }: Props) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            scroll="body"
        >
            <DialogContent sx={{ p: 0 }}>
                <IconButton
                    onClick={onClose}
                    sx={{ position: "absolute", right: 10, top: 10, zIndex: 10 }}
                >
                    <CloseIcon />
                </IconButton>

                <div className="flex flex-col md:flex-row p-12">
                    <div className="md:w-1/2">
                        <img
                            src={image}
                            alt="news"
                            className="w-full h-full object-cover "
                        />
                    </div>

                    <div className="md:w-1/2 px-6  flex flex-col justify-center">
                        <h2 className="text-xl font-bold text-secondary flex flex-col mb-8">
                            <span>{title}</span>
                            <span className="max-w-[58%] h-[2px] bg-primary mt-3"></span>

                        </h2>

                        <p className="text-base text-secondary mb-8">
                            {paragraph1}
                        </p>
                        <p className="text-base text-secondary mb-5">
                            {paragraph2}
                        </p>

                        <div className="flex flex-col">
                            <div className="bg-[#DFEBFF] p-3 mb-4 flex flex-row items-center justify-center gap-5 ">
                                    <Bank weight="fill" className="text-secondary w-20 h-20" />
                                <p className="text-secondary">
                                    Program voltado para o desenvolvimento de competências de liderança no sector pública, capacitado...
                                </p>
                            </div>

                            <div className="bg-[#DFEBFF] p-3 flex flex-row items-center gap-5 justify-center">
                                <CurrencyCircleDollar weight="fill" className="text-secondary w-20 h-20"   />
                                <p className="text-secondary">
                                    Program voltado para o desenvolvimento de competências de liderança no sector pública, capacitado...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}