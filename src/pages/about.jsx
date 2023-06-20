import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SocialLink from '@/components/SocialLink'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Sam Ward</title>
        <meta
          name="description"
          content="I’m Sam Ward. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Sam Ward. I live in England and work fully remote.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I have been a developer for over 6 years. I enjoy the creative
                freedom from working on the front-end, whilst dealing with the
                challenging data structures of the back-end. I started out using
                PHP and C# at university and whilst on placement. I enjoy
                learning about new technologies. I am currently learning Golang
                and Python.
              </p>
              <p>
                I have lived both in Australia and the UK. I spent most of my
                time living in Western Australia, Perth which was a great
                experience for me. I am not afraid to go outside my comfort
                zone. As I believe that&apos;s the best way to challenge
                yourself.
              </p>
              <p>
                Apart from being a developer, I enjoy travelling and immersing
                in different cultures. My aim is to travel 50 countries by the
                time I&apos;m 40. I care about the environment and our planet. I
                have a keen interest renewable energy and the shift to
                electrification.
              </p>
              <p>
                The biggest inspirations in my life are Steve Irwin and Elon
                Musk.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink href="https://github.com/barcasam7" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/sam-ward-b96432100/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
