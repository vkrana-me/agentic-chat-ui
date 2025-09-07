import {NextResponse} from 'next/server';

export async function GET() {
    const environmentStatus ={
        FIRECRAWL_API_KEY: !!process.env.FIRECRAWL_API_KEY,
        OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
        ANTHROPIC_API_KEY: !!process.env.ANTHROPIC_API_KEY,
    }
    return NextResponse.json(environmentStatus);
}
