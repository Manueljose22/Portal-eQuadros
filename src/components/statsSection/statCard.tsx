import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface StatCardProps {
    value: number;
    label: string;
    duration?: number;
    sinal: string;
}

export default function StatCard({ value, label, duration = 2, sinal }: StatCardProps) {
    
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.floor(latest));


    useEffect(() => {
        const controls = animate(motionValue, value, { duration });
        return controls.stop;
    }, [value, duration, motionValue]);

    return (
        <div className="flex flex-col  justify-center">
            <div className="flex items-baseline">
                <motion.div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                    {rounded}
                </motion.div>
                 <span className="text-3xl lg:text-4xl font-bold text-secondary mb-2">{sinal}</span>
            </div>
            <p className="text-sm lg:text-base text-secondary">{label}</p>
        </div>
    );
};

