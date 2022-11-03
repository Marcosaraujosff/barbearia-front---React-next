import { useState } from "react"

import Head from "next/head"
import Image from "next/image"
import logoImg from "../../../public/images/logo.svg"
import Link from "next/link"

import {
    Center
    , Flex
    , Input
    , Button
    , Text
} from '@chakra-ui/react'

export default function Register() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    function handleRegister(){
        console.log(name)
        console.log(email)
        console.log(password)
    }

    return (
        <>
            <Head>
                <title> Crie sua conta. </title>
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
                        placeholder="Nome da barbearia"
                        type="email"
                        mb={3}
                        color="button.default"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

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

                    <Button onClick={handleRegister} background="button.cta" mb={6} color="gray.900" size="lg" _hover={{ bg: '#ffb13e' }}>
                        Cadastrar
                    </Button>

                    <Center mt={2}>
                        <Link href="/login">
                            <Text cursor="pointer" color="button.default">Ja possui uma conta? <strong>Acessar</strong></Text>
                        </Link>
                    </Center>
                </Flex>
            </Flex>
        </>
    )
}