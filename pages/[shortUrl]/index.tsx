import { GetServerSideProps } from 'next';
import { PrismaClient } from '@prisma/client';

export default function ShortIdPage() {
    return (
        <div>
            Enter
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const prisma = new PrismaClient();
    if (!params) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    const { shortUrl } = params;

    if (typeof shortUrl !== 'string') {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const link = await prisma.link.findFirst({ where: { shortUrl } });

    if (!link) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        redirect:{
            destination: link.url,
            permanent: false
        }
    }
}