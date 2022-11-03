import { useState, useContext } from "react"

import Head from "next/head"
import Image from "next/image"
import logoImg from "../../../public/images/logo.svg"
import Link from "next/link"

import { AuthContext } from "../../context/AuthContext"

import {
    Center
    , Flex
    , Input
    , Button
    , Text
} from '@chakra-ui/react'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext);

    async function handleLogin() {

        await signIn({ email, password });

    }

    return (
        <> 
            <Head>
                <title> Barbearia - Faça login para acessar. </title>
            </Head>

            <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center">
                <Flex width={640} direction="column" p={14} rounded={8}>
                    <Center p={4}>
                        <Image
                            src={logoImg}
                            quality={100}
                            width={240}
                            objectFit="fill"
                            alt="Logo barber"
                        />
                    </Center>
                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder="example@example.com"
                        type="email"
                        mb={3}
                        color="button.default"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder="*********"
                        type="password"
                        mb={6}
                        color="button.default"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button onClick={handleLogin} background="button.cta" mb={6} color="gray.900" size="lg" _hover={{ bg: '#ffb13e' }}>
                        Acessar
                    </Button>

                    <Center mt={2}>
                        <Link href="/register">
                            <Text cursor="pointer" color="button.default">Ainda não possui conta? <strong>Cadastre-se</strong></Text>
                        </Link>
                    </Center>
                </Flex>
            </Flex>
        </>
    )
}