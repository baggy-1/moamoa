'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Sparkles, Search, Link2, FolderOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const Bg = dynamic(() => import('../components/bg/bg'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gray-900" />
})

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Bg />
      {/* Content */}
      <div className="relative">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/moamoa2.png"
              alt="모아모아 로고"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-white font-bold">모아모아</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-white/80">
              로그인
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-white/90">
              시작하기
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container px-4 pt-32 pb-16 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              링크를 더 스마트하게
              <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                관리하는 방법
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              AI 기반 자동 분류와 분석으로 당신의 디지털 자산을 체계적으로 관리하세요
            </p>
          </motion.div>

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-2 bg-white/10 backdrop-blur-xl border-white/20">
              <div className="flex gap-2">
                <Input 
                  placeholder="링크를 입력해보세요" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-white text-gray-900 hover:bg-white/90 px-6">
                  <Sparkles className="w-4 h-4 mr-2" />
                  시작하기
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="container px-4 py-16 mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Link2 className="w-6 h-6" />,
                title: "스마트 링크 관리",
                description: "모든 링크를 한 곳에서 체계적으로 관리하세요"
              },
              {
                icon: <FolderOpen className="w-6 h-6" />,
                title: "AI 자동 분류",
                description: "인공지능이 링크의 내용을 분석하고 자동으로 분류합니다"
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "강력한 검색",
                description: "필요한 정보를 순식간에 찾아보세요"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1), duration: 0.8 }}
              >
                <Card className="p-6 h-full bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/20 transition-colors">
                  <div className="p-3 mb-4 rounded-lg bg-white/10 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

