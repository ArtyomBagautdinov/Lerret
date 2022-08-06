import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Lerret : React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
       if (canvasRef.current) {

        const canvas = canvasRef.current;

        const ctx = canvas.getContext('2d');

        canvas.onmousedown = (event) => {

            canvas.onmousemove = (event) => {
                let x = event.offsetX;
                let y = event.offsetY;
    
                ctx?.fillRect(x,y,5,5)
            }

            canvas.onmouseup = () => {
                canvas.onmousemove = null;
            }
        }

       }


    })


    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-purple-900">
            <canvas ref={canvasRef} className="w-[800px] h-[800px] shadow-2xl bg-white rounded-lg" width="800" height="800"></canvas>
        </div>
    );
}

export default Lerret;