import { useState } from "react";
// import Footer from "../../components/Footer";
import {
    LineWrapper,
    Line,
} from "./styles";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { FiFacebook } from "react-icons/fi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Input } from "@/components/ui/input";
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="flex flex-row items-center justify-center h-[100vh] bg-slate-900 ">
            <div className="flex flex-col items-center justify-center w-[500px] h-[700px] bg-slate-800 rounded-2xl">
                <h1 className="font-bold text-white font-roboto text-4xl mb-11">Login</h1>
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="flex flex-col w-[388px] items-center">
                        <span className="font-roboto text-white font-bold self-start">E-mail ou CPF</span>
                        <Input
                            className=" h-[30px] w-full mb-8 mt-2 text-white"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-[388px] items-center">
                        <span className="font-roboto text-white font-bold self-start">Senha</span>
                        <Input
                            className="h-[30px] w-full mb-8 mt-2 text-white"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                {/* <ButtonAccess onClick={handlerLogin}>Acessar</ButtonAccess> */}
                <Button variant="reverseGhost" className="mb-5">Efetuar login</Button>
                <LineWrapper>
                    <Line></Line>
                    <span className="text-white font-roboto font-bold text-xl w-40 text-center">Acessar via</span>
                    <Line></Line>
                </LineWrapper>
                <div className="flex flex-col justify-between h-44 mt-7">
                    <Button variant="reverseGhost" size="lg" className="mt-2">
                        <FcGoogle size={25} className="mr-3" />Conectar com google
                    </Button>
                    <Button variant="reverseGhost" size="lg" className="mt-2">
                        <FiFacebook size={25} className="mr-3" />Conectar com facebook
                    </Button>
                    <Button variant="reverseGhost" size="lg" className="mt-2">
                        <BiLogoInstagramAlt size={25} className="mr-3" />Conectar com Instagram
                    </Button>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}