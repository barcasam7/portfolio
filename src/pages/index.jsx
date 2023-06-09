import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SocialLink from '@/components/SocialLink';
import { Container } from '@/components/Container'
import Photos from '@/components/Photos'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Sam Ward - Software Developer
        </title>
        <meta
          name="description"
          content="I&apos;m Sam, a software Developer based in England. Welcome to my portfolio website where you can learn more about me and my projects I've worked on."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, animal lover, and traveller.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I&#39;m Sam, a software Developer based in England. Welcome to my portfolio website where you can learn more about me and my projects I&#39;ve worked on.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
