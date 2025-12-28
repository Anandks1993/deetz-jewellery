import Link from 'next/link';

export default function Header() {
  return (
    <header className='py-4 px-4 border-b border-gray-200'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link href='/' className='text-lg font-bold'>
          Deetz Jewellery
        </Link> 
        {/* Navigation */}
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-600">
            Products
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}