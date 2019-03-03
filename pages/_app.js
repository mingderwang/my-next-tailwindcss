import React from 'react'
import App, { Container } from 'next/app'
import '../styles/index.css' // should not in _document.js

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
<div className="bg-grey-light container mx-auto px-4 items-center">
<nav className="font-sans bg-grey-light text-center flex justify-between my-4 mx-auto container overflow-hidden items-center">
  <div className="flex items-center">
    <a href="https://bimap-system.now.sh" className="mr-4 w-32">
      <img src="https://cdn-images-1.medium.com/letterbox/192/72/50/50/1*gJy5xloukmnE1RrUaokaZw.png" className="w-full" alt="logo"/>
    </a>
    <input type="search" placeholder="Search" className="text-sm transition focus:outline-0 border border-transparent focus:bg-white focus:border-grey-light placeholder-grey-darkest rounded bg-grey-lighter py-1 px-2 pl-10 appearance-none leading-normal ds-input">
    </input>
    <ul className="text-sm text-grey-dark list-reset flex items-center">
      <li><a href="/status#" className="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline">Status</a></li>
      <li><a href="/help#" className="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline">Help</a></li>
    </ul>
</div>
  <ul className="text-sm text-grey-dark list-reset flex items-center">
    <li><a href="signin#" className="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline">Log In</a></li>
    <li><a href="signup#" className="inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline">Register</a></li>
    <li><a href="https://medium.com/bimap/%E7%B6%AD%E9%81%8B%E5%A4%A7%E6%95%B8%E6%93%9A%E5%88%86%E6%9E%90-43b68b6bf9d6" className="bg-grey inline-block py-2 px-3 text-grey-darkest hover:text-grey-dark no-underline">Blog</a></li>
  </ul>
</nav>
      <Container>
        <Component {...pageProps} />
      </Container>
</div>
    )
  }
}

export default MyApp
