import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type Data = | { error: string } | ShortUrl;

type ShortUrl = {
    data: {
        id: number;
        url: string;
        shortUrl: string;
        createdAt: Date;
    }
}

const prisma = new PrismaClient();

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'POST':
            return createShortUrl(req, res);
        default:
            res.status(405).json({ error: 'Method not allowed' });
    }


}

const createShortUrl = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { url } = req.body;

    const shortUrl = Math.random().toString(36).substring(2, 5);

    try {

        // find the url in the database
        const link = await prisma.link.findFirst({
            where: {
                url
            }
        });

        // if the url is already in the database, return the short url
        if (link) {
            return res.status(200).json({
                data: link
            });
        }
        
        const data = await prisma.link.create({
            data: {
                url,
                shortUrl: shortUrl
            }
        });
        return res.status(200).json({
            data
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' + error });
    }

}