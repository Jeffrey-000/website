"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

type Props = {
    message: string;
    className?: string;
    children?: React.ReactNode;
    size?: "default" | "icon" | "sm" | "lg";
};
export default function MessageButton({
    message,
    className = "",
    children,
}: Props) {
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => {
        if (!showMessage) {
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (showMessage) {
            timer = setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [showMessage]);

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="relative">
                {/* Message Box */}
                {showMessage && (
                    <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2 duration-300 ease-out">
                        <Card className=" p-4 max-w-sm relative">
                            <p className=" text-center mb-3">{message}</p>
                        </Card>
                    </div>
                )}

                {/* Button */}
                <Button
                    size={"sm"}
                    onClick={toggleMessage}
                    className={className}
                >
                    {children}
                </Button>
            </div>
        </div>
    );
}
