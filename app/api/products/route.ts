import { NextResponse } from "next/server"


const API_BASE_URL = process.env.API_BASE_URL

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/products?limit=20`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch product')
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      {status : 500}
    )
  }
  
}
